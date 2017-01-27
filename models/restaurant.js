var Sequelize = require('sequelize');
const db = require('./db');



var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING
	},
	cuisine: {
		type: Sequelize.STRING

	},
	price: {
		type: Sequelize.INTEGER,
		min: 1,
		max: 5
	}
});



module.exports = Restaurant;
