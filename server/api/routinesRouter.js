const router = require('express').Router();

const { Routine, Pose } = require('../db');

// GET /api/routines/
router.get('/', async function (req, res, next) {
	try {
		const routines = await Routine.findAll({
			where: {
				userId: req.user.id,
			},
		});
		// routines looks like [{id: X, poseIdAry: [1, 2, 3]}, {id: X, poseIdAry: [3, 2, 1]}]

		res.send(routines);
	} catch (err) {
		res.status(404).send('No routines found');
	}
});

// GET /api/routines/:routineId
router.get('/:routineId', async function (req, res, next) {
	try {
		const routine = await Routine.findByPk(req.params.routineId);
		const poseIds = routine.poseIdAry;
		poses = [];

		for (i of poseIds) {
			console.log('looking for pose id #', poseIds[i]);
			const pose = await Pose.findByPk(poseIds[i]);
			poses.push(pose);
		}
		// routines looks like [{id: X, poseIdAry: [1, 2, 3]}, {id: X, poseIdAry: [3, 2, 1]}]

		res.send(poses);
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
