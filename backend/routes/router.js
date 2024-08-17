// https://stackoverflow.com/questions/40947650/axios-get-in-url-works-but-with-second-parameter-as-object-it-doesnt

const Food = require('../data/Food');
const Parse = require('../src/Parse');
const Restaurant = require('../data/Restaurant');
const Filter = require('../data/Filter');
const express = require('express')
const router = express.Router()

const food_arr = Parse.foodInit("./data/food.csv")
const restaurant_arr = Parse.restaurantInit("./data/restaurant.csv");

const foodJSON = JSON.stringify(food_arr);
const restaurantJSON = JSON.stringify(restaurant_arr);

//store.set("foodJSON", foodJSON);
//store.set("restaurantJSON", restaurantJSON);

const filter = new Filter();

let filter_array = [];

router.get('/data', (req, res) => {
  if (req.query) {
    filter_array = [req.query.a, req.query.c, req.query.r, req.query.b, req.query.f, req.query.p]
    // console.log(filter_array)
    let filtered_food = filter.completeFilter(food_arr, filter_array);
    const filteredJSON = JSON.stringify(filtered_food);
    // console.log("results: ", filteredJSON)
    res.send(filteredJSON)
  }
  else {
    res.send([])
  }
  
});

module.exports = router