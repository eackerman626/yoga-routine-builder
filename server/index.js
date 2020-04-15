const express = require('express');
const app = express();
const path = require('path');

// logging middleware
const morgan = require('morgan');
app.use(morgan('dev'));

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// session middleware and storing the session in our db
const session = require('express-session');
const { db } = require('./db');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });
dbStore.sync();

app.use(
	session({
		secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
		store: dbStore,
		resave: false,
		saveUninitialized: false,
	})
);

// initialize passport
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

const { User } = require('./db');

// serialize user (remember user in session store)
passport.serializeUser((user, done) => {
	try {
		done(null, user.id);
	} catch (err) {
		done(err);
	}
});

// deserialize user (re-obtain user from database)
passport.deserializeUser((id, done) => {
	User.findByPk(id)
		.then((user) => done(null, user))
		.catch(done);
});

// api routes for AJAX requests
app.use('/api', require('./api'));

// auth routes for login/signup
app.use('/auth', require('./auth'));

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use(function (err, req, res, next) {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
