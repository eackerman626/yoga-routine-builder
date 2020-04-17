const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { User } = require('../db');

// retrieve google secret and client id
const dotenv = require('dotenv');
dotenv.config();

router.get(
	'/',
	passport.authenticate('google', {
		scope: 'profile email',
	})
);

router.get(
	'/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login',
	})
);

const verificationCallback = async (accessToken, refreshToken, profile, done) => {
	try {
		console.log('>>>>>> EVERYTHING ON PROFILE: ', profile);
		const [user] = await User.findOrCreate({
			where: {
				googleId: profile.id,
			},
			defaults: {
				email: profile.emails[0].value,
				name: profile.name.givenName,
				imageUrl: profile.photos ? profile.photos[0].value : undefined,
			},
		});
		done(null, user);
	} catch (error) {
		done(error);
	}
};

const strategy = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID || 'foo',
		clientSecret: process.env.GOOGLE_SECRET || 'bar',
		callbackURL: '/auth/google/callback',
	},
	verificationCallback
);

passport.use(strategy);

module.exports = router;
