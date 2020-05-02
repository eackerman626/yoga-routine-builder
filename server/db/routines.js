const Sequelize = require('sequelize');
const db = require('./database');

const Routines = db.define('routine', {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	poseIdAry: {
		type: Sequelize.ARRAY(Sequelize.INTEGER),
	},
});

module.exports = Routines;
