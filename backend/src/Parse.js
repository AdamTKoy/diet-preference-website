
const Food = require("../data/Food");
const fs = require('fs');
const Restaurant = require("../data/Restaurant");

function foodInit(data) {
    const ret_array = [];
    const food_array = fs.readFileSync(data, "utf8").split("\n");
    for (let i = 1; i < food_array.length; i++) {
        ret_array.push(new Food(food_array[i]));
        // if (i < 10) console.log(new Food(food_array[i]));
    }
    return ret_array;
}

function restaurantInit(data) {
    const ret_array = [];
    const restaurant_array = fs.readFileSync(data, "utf8").split("\n"); 
    for (let i = 1; i < restaurant_array.length; i++) {
        ret_array.push(new Restaurant(restaurant_array[i]));
    }
    return ret_array;
}

module.exports.foodInit = foodInit;
module.exports.restaurantInit = restaurantInit;