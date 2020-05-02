const router = require('express').Router();

const { Routine } = require('../db');

// GET /api/routines/
router.get('/', async function (req, res, next) {
	try {
		const routines = await Routine.findAll({
			where: {
				userId: req.user.id,
			},
		});
		res.send(routines);
	} catch (err) {
		res.status(404).send('No routines found');
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
