'use strict';

var Sequelize = require('sequelize');
var db = require('./_db');

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
	},
	amenitiies: Sequelize.STRING
});

module.exports = Hotel;

// Other places like my seed are going to want acccess to the database instance so they can make a sync.