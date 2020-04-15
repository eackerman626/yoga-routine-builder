const { db } = require('./server/db');
const app = require('./server');
const PORT = process.env.PORT || 3000;

db.sync() // sync our database
	.then(function () {
		app.listen(PORT, function () {
			console.log('Knock, knock');
			console.log("Who's there?");
			console.log(`Your server, listening on port ${PORT}`);
		}); // then start listening with our express server once we have synced
	});
