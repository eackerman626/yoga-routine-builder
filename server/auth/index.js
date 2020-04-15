const router = require('express').Router();
const { User } = require('../db');

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

module.exports = router;
