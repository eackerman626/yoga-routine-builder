const router = require('express').Router();

// /api/exampleRoute
router.use('/exampleRoute', require('./exampleRouter'));

// 404 Error handling
router.use(function (req, res, next) {
	const err = new Error('Not found.');
	err.status = 404;
	next(err);
});

module.exports = router;
