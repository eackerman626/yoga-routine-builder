const router = require('express').Router();

const { Example } = require('../db');

// GET /api/exampleRoute/
router.get('/', async function (req, res, next) {
	try {
		const examples = await Example.findAll();
		res.send(examples);
	} catch (err) {
		res.status(404).send('No examples found');
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
