const { db, Example, User } = require('./server/db');

const seed = async () => {
	try {
		await db.sync({
			force: true,
		});

		const examples = [
			{
				id: 1,
				name: 'example1',
			},
			{
				id: 2,
				name: 'example2',
			},
			{
				id: 3,
				name: 'example3',
			},
			{
				id: 4,
				name: 'example4',
			},
		];

		const user = {
			email: 'asdf@asdf.com',
			password: 'abc',
		};

		await Example.bulkCreate(examples);
		await User.create(user);
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
