var Sequelize = require('sequelize');
const db = require('./db');


var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.FLOAT,
		validate: {
		min: 1,
		max: 5
		}
	}
});



module.exports = Hotel;

