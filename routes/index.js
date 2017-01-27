// 'use strict';
// const router = require('express').Router();
// const models = require('../models');
// const Hotel = models.Hotel; 
// var Promise = require('bluebird');

// router.get('/', function (req, res, next) {
//   res.render('index');
// });

// module.exports = router;



'use strict';
const router = require('express').Router();
// const models = rquire('../models');
var Hotel = require('../models/hotel');
const Promise = require('bluebird');
var Sequelize = require('sequelize');


var arrayOfHotels = [];
router.get('/', function (req, res, next) {
  Hotel.findAll( {
  	attributes: ['name']
  	})
  .then(function(hotels) {
  	for (var i =0; i < hotels.length; i++) {
  		console.log(hotels[i].name)
  	}
  	});
  });

module.exports = router;