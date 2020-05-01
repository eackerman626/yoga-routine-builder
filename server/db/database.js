const Sequelize = require('sequelize');

// change database name in url
const db = new Sequelize('postgres://localhost:5432/yoga', {
	logging: false
});

module.exports = db;
