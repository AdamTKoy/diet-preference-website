class Food {
  constructor(input_string) {
    const input_values = input_string.split(";");
    this.name = input_values[0];
    this.restaurant = input_values[1];
    if (input_values[2] != "") {
      this.allergens = input_values[2].split(",");
    } else {
      this.allergens = [];
    }
    this.cuisine = input_values[3];
    this.calories = Number(input_values[4]);
    this.carbs = Number(input_values[5]);
    this.fats = Number(input_values[6]);
    this.protein = Number(input_values[7]);
  }
  addAllergen(new_allergen) {
    for (let i = 0; i < this.allergens.length; i++) {
      if (this.allergens[i] == new_allergen) {
        return;
      }
    }
    this.allergens.push(new_allergen);
  }
  clearAllergens() {
    while (this.allergens.length > 0) {
      this.allergens.pop();
    }
  }
}

module.exports = Food;
