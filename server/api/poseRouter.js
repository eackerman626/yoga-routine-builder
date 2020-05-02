const router = require('express').Router();

const { Pose } = require('../db');

// GET /api/poses/
router.get('/', async function (req, res, next) {
	try {
		const poses = await Pose.findAll();
		res.send(poses);
	} catch (err) {
		res.status(404).send('No poses found');
	}
});

module.exports = router;
