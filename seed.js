const { db, Pose, User, Routine } = require('./server/db');

const seed = async () => {
	try {
		await db.sync({
			force: true,
		});

		const poses = [
			{
				id: 1,
				name: 'Downward Facing Dog',
				category: 'Standing',
				imageUrl: '/images/treePose.png',
			},
			{
				id: 2,
				name: 'Tree',
				category: 'Standing',
				direction: 'Left',
				imageUrl: '/images/treePose.png',
			},
			{
				id: 3,
				name: 'Corpse Pose',
				category: 'Supine',
				imageUrl: '/images/treePose.png',
			},
			{
				id: 4,
				name: 'Half Pigeon',
				category: 'Sitting',
				direction: 'Right',
				imageUrl: '/images/treePose.png',
			},
			{
				id: 5,
				name: 'Half Pigeon',
				category: 'Sitting',
				direction: 'Left',
				imageUrl: '/images/treePose.png',
			},
		];

		const user = {
			name: 'Asdf',
			email: 'asdf@asdf.com',
			password: '123',
		};

		const routine = {
			title: 'Routine 1',
			poseIdAry: [1, 1, 2, 3, 1],
			userId: 1,
		};

		await Pose.bulkCreate(poses);
		await User.create(user);
		await Routine.create(routine);
	} catch (err) {
		console.log(err);
	}
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
	seed()
		.then(() => {
			console.log('Seeding success!');
			db.close();
		})
		.catch((err) => {
			console.error('Oh noes! Something went wrong!');
			console.error(err);
			db.close();
		});
}
