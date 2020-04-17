const router = require('express').Router();
const { User } = require('../db');
const googleRouter = require('./google');

router.use('/google', googleRouter);

// PUT /auth/login
router.put('/login', (req, res, next) => {
	User.findOne({
		where: {
			email: req.body.email,
		},
	})
		.then((user) => {
			if (!user) res.status(401).send('User not found');
			else if (!user.correctPassword(req.body.password)) res.status(401).send('Incorrect password');
			else {
				req.login(user, (err) => {
					if (err) next(err);
					else
						res.json({
							id: user.id,
							email: user.email,
						});
				});
			}
		})
		.catch(next);
});

// POST /auth/signup
router.post('/signup', (req, res, next) => {
	User.create(req.body)
		.then((user) => {
			req.login(user, (err) => {
				if (err) next(err);
				else
					res.json({
						id: user.id,
						email: user.email,
					});
			});
		})
		.catch(next);
});

// DELETE /auth/logout
router.delete('/logout', (req, res, next) => {
	req.logout();
	req.session.destroy();
	res.sendStatus(204);
});

// GET /auth/me
router.get('/me', (req, res, next) => {
	if (req.user) {
		res.json({
			id: req.user.id,
			email: req.user.email,
			name: req.user.name,
		});
	} else {
		res.status(204).send('No user is logged in');
	}
});

module.exports = router;
