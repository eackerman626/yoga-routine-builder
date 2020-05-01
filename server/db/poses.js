const Sequelize = require('sequelize');
const db = require('./database');

const Poses = db.define('pose', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	category: Sequelize.ENUM('Standing', 'Sitting', 'Supine', 'Prone'),
	direction: Sequelize.ENUM('Right', 'Left'),
	imageUrl: Sequelize.STRING
});

module.exports = Poses;
