const Food = require('./Food');
const Restaurant = require('./Restaurant');

class Filter
{
    completeFilter(food_array, filter_list) {
        const allergen_filters = [];
        const cuisine_filters = [];
        const calorie_filters = [];
        const carbs_filters = [];
        const fats_filters = [];
        const protein_filters = [];
        if (filter_list.size == 0) { return food_array; }
        for (let filter of filter_list) {
            const split_filter = filter.split(":");
            switch (split_filter[0]) {
                case 'a':
                    allergen_filters.push(split_filter[1]);
                    break;
                case 'c':
                    cuisine_filters.push(split_filter[1]);
                    break;
                case 'r':
                    let calorie_range = split_filter[1];
                    calorie_range = calorie_range.replaceAll("(", "");
                    calorie_range = calorie_range.replaceAll(")", "");
                    const calorie_range_split = calorie_range.split(", ");
                    calorie_filters.push(Number(calorie_range_split[0]));
                    calorie_filters.push(Number(calorie_range_split[1]));
                    break;
                case 'b':
                    let carbs_range = split_filter[1];
                    carbs_range = carbs_range.replaceAll("(", "");
                    carbs_range = carbs_range.replaceAll(")", "");
                    const carbs_range_split = carbs_range.split(", ");
                    carbs_filters.push(Number(carbs_range_split[0]));
                    carbs_filters.push(Number(carbs_range_split[1]));
                    break;
                case 'f':
                    let fats_range = split_filter[1];
                    fats_range = fats_range.replaceAll("(", "");
                    fats_range = fats_range.replaceAll(")", "");
                    const fats_range_split = fats_range.split(", ");
                    fats_filters.push(Number(fats_range_split[0]));
                    fats_filters.push(Number(fats_range_split[1]));
                    break;
                case 'p':
                    let protein_range = split_filter[1];
                    protein_range = protein_range.replaceAll("(", "");
                    protein_range = protein_range.replaceAll(")", "");
                    const protein_range_split = protein_range.split(", ");
                    protein_filters.push(Number(protein_range_split[0]));
                    protein_filters.push(Number(protein_range_split[1]));
                    break;
            }
        }
        let return_array = food_array;
        return_array = this.filterOnAllergens(return_array, allergen_filters);
        return_array = this.filterOnCuisineType(return_array, cuisine_filters);
        return_array = this.filterOnCalories(return_array, calorie_filters);
        return_array = this.filterOnCarbs(return_array, carbs_filters);
        return_array = this.filterOnFats(return_array, fats_filters);
        return_array = this.filterOnProtein(return_array, protein_filters);
        return return_array;
    }

    filterOnAllergens(food_array, allergen_array)
    {
        if (allergen_array.length == 0) { return food_array; }
        const new_food_array = [];

        for (let food of food_array)
        {
            let add = true;
            for (let allergen of allergen_array)
            {
                if (food.allergens.includes(allergen))
                {
                    // don't include food because person is allergic
                    add = false;
                    break;
                }
            }
            if (add) { new_food_array.push(food); }
        }
        return new_food_array;
    }

    filterOnCuisineType(food_array, cuisine_arr)
    {
        if (cuisine_arr.length == 0) { return food_array; }
        const new_food_array = [];

        for (let food of food_array)
        {
            for (let cuisine of cuisine_arr) {
                if (food.cuisine == cuisine) {
                    new_food_array.push(food);
                    break;
                }
            }
        }
        return new_food_array;
    }

    filterOnCalories(food_array, calorie_arr)
    {
        if (calorie_arr.length == 0) { return food_array; }
        const new_food_array = []

        for (let food of food_array) {
            for (let i = 0; i < calorie_arr.length; i += 2) {
                if (food.calories >= calorie_arr[i] && food.calories <= calorie_arr[i + 1]) {
                    new_food_array.push(food);
                    break;
                }
            }
        }
        return new_food_array;
    }

    filterOnCarbs(food_array, carb_arr)
    {
        if (carb_arr.length == 0) { return food_array; }
        const new_food_array = []

        for (let food of food_array) {
            for (let i = 0; i < carb_arr.length; i += 2) {
                if (food.carbs >= carb_arr[i] && food.carbs <= carb_arr[i + 1]) {
                    new_food_array.push(food);
                    break;
                }
            }
        }
        return new_food_array;
    }

    filterOnFats(food_array, fat_arr)
    {
        if (fat_arr.length == 0) { return food_array; }
        const new_food_array = []

        for (let food of food_array)
        {
            for (let i = 0; i < fat_arr.length; i += 2) {
                if (food.fats >= fat_arr[i] && food.fats <= fat_arr[i + 1]) {
                    new_food_array.push(food);
                    break;
                }
            }
        }
        return new_food_array;
    }

    filterOnProtein(food_array, protein_arr)
    {
        if (protein_arr.length == 0) { return food_array; }
        const new_food_array = []

        for (let food of food_array)
        {
            for (let i = 0; i < protein_arr.length; i += 2) {
                if (food.protein >= protein_arr[i] && food.protein <= protein_arr[i + 1]) {
                    new_food_array.push(food);
                    break;
                }
            }
        }
        return new_food_array;
    }

    filterOnPrice(restaurant_array, price_arr)
    {
        if (price_arr.length != 2) { return restaurant_array; }
        const new_restaurant_array = []

        for (let restauraunt of restaurant_array)
        {
            if (restauraunt.low_price >= price_arr[0] && restauraunt.high_price <= price_arr[1]) { 
                new_restaurant_array.push(restauraunt);
            }
        }
        return new_restaurant_array;
    }

    // distance_arr[0] is x coord, [1] is y_coord, and [2] is max euclidean distance
    filterOnDistance(restaurant_array, distance_arr)
    {
        if (distance_arr.length != 2) { return restaurant_array; }
        const new_restaurant_array = []

        for (let restauraunt of restaurant_array)
        {
            let x_diff = Math.pow(restauraunt.x_coord - distance_arr[0], 2);
            let y_diff = Math.pow(restauraunt.y_coord - distance_arr[1], 2);
            if (distance_arr[2] >= Math.sqrt(x_diff + y_diff)) { // euclidean distance check
                new_restaurant_array.push(restauraunt);
            }
        }
        return new_restaurant_array;
    }
}

module.exports = Filter;
