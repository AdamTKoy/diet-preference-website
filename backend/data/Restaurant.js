class Restaurant {
  constructor(input_string) {
    const input_values = input_string.split(",");
    this.name = input_values[0];
    this.x_coord = parseFloat(input_values[1]);
    this.y_coord = parseFloat(input_values[2]);
    this.low_price = parseFloat(input_values[3]);
    this.high_price = parseFloat(input_values[4]);
  }
  
  /*get menu() {
    return this.menu;
  }
  set menu(new_menu) {
    this.menu = new_menu;
  }*/

}

module.exports = Restaurant;