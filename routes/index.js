'use strict';
const router = require('express').Router();
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
const Promise = require('bluebird');
var Sequelize = require('sequelize');


var hotelArray = [];
var restaurantArray = [];
var activityArray = [];

router.get('/', function (req, res, next) {
res.render('homepage')
})

router.get('/planyourtrip', function(req,res,next) {

var hotel1 = Hotel.findAll({
    attributes: ['name']
    })
  .then(function(hotels) {
      for (var i=0; i<hotels.length; i++) {
        hotelArray.push(hotels[i].name)
      }
  })

 var restaurant1 =Restaurant.findAll({
        attributes: ['name']
      })
  .then(function(restaurants) {
    for (var i=0; i<restaurants.length; i++) {
      restaurantArray.push(restaurants[i].name)
    }
  })

 var activity1 = Activity.findAll({
      attributes: ['name']
     })
  .then(function(activities) {
    for(var i=0; i<activities.length; i++) {
      activityArray.push(activities[i].name)
    }
  })

  Promise.all([hotel1, restaurant1, activity1]).
  then(function() {
      res.render('index', {
            hotels: hotelArray,
            restaurants: restaurantArray,
            activities: activityArray
      })
  })



})


 
  
module.exports = router;