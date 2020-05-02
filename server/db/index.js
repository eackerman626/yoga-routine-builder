const db = require('./database');
const Pose = require('./poses');
const User = require('./user');
const Routine = require('./routines');

// associate tables here
Routine.belongsTo(User);
User.hasMany(Routine);

module.exports = {
	db,
	Pose,
	User,
	Routine,
};
