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

// POST /api/exampleRoute/
router.post('/', function (req, res, next) {
	/* etc */
});

// PUT /api/exampleRoute/:exampleId
router.put('/:exampleId', function (req, res, next) {
	/* etc */
});

// DELETE /api/exampleRoute/:exampleId
router.delete('/:exampleId', function (req, res, next) {
	/* etc */
});

module.exports = router;
