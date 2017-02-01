'use strict';
const router = require('express').Router();
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
const Place = require('../models/place');
const Promise = require('bluebird');
var Sequelize = require('sequelize');


var hotelArray = [];
var restaurantArray = [];
var activityArray = [];

router.get('/', function (req, res, next) {
res.render('homepage')
})

router.get('/planyourtrip', function(req,res,next) {


var findingHotels = Hotel.findAll({
    include: [Place]
  });

console.log('eyes wide shut', findingHotels[0])

  var findingActivities = Activity.findAll({
    include: [Place]
  });

  var findingRestaurants = Restaurant.findAll({
    include: [Place]
  });

  Promise.all([
    findingHotels,
    findingActivities,
    findingRestaurants
  ])
  .spread(function(hotels, activities, restaurants) {
    // console.log('WHATS UP BRO', hotels)
    res.render('index', {
      hotels: hotels,
      activities: activities,
      restaurants: restaurants
    });
  })
  .catch(next);
})


 
  
module.exports = router;