const Food = require('../data/Food');
const Parse = require('./Parse');
const Restaurant = require('../data/Restaurant');
const Filter = require('../data/Filter');
const store = require("store2");
const express = require('express');
const router = express.Router();

const food_arr = Parse.foodInit("../data/food.csv");
const restaurant_arr = Parse.restaurantInit("../data/restaurant.csv");

const foodJSON = JSON.stringify(food_arr);
const restaurantJSON = JSON.stringify(restaurant_arr);

store.set("foodJSON", foodJSON);
store.set("restaurantJSON", restaurantJSON);

//localStorage.setItem("foodJSON", foodJSON);
//localStorage.setItem("restaurantJSON", restaurantJSON);

const filter = new Filter();

let filter_array = [];

console.log(filter_array);

router.get('/data', (req, res) => {
    filter_array = JSON.parse(req.body());
    let filtered_food = filter.completeFilter(food_arr, filter_array);
    const filteredJSON = JSON.stringify(filtered_food);
    res.json(filteredJSON);
});