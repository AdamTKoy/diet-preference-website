#include "Food.h"

Food::Food() {
  name_ = "N/A";
  cuisine_ = "N/A";
  protein_amount_ = -1;
  carbs_amount_ = -1;
  fats_amount_ = -1;
  calories_ = -1;
}

Food::Food(std::string input_line) {
  int loc = input_line.find(";");
  int prev_loc = 0;
  name_ = input_line.substr(prev_loc, loc - prev_loc);
  prev_loc = loc + 1;
  loc = input_line.find(";", loc + 1);
  std::string allergen_list = input_line.substr(prev_loc, loc - prev_loc);
  while (allergen_list != "") {
    if (std::string::npos == allergen_list.find(",") {
      allergens_.push_back(allergen_list);
      allergen_list = "";
    } else {
      int pos = allergen_list.find(",");
      allergens_.push_back(allergen_list.substr(0, pos);
      allergen_list = allergen_list.substr(pos + 1);
    }
  }
  prev_loc = loc + 1;
  loc = input_line.find(";", loc + 1);
  cuisine_ = input_line.substr(prev_loc, loc - prev_loc);
  prev_loc = loc + 1;
  loc = input_line.find(";", loc + 1);
  carbs_amount_ = std::stoi(input_line.substr(prev_loc, loc - prev_loc);
  prev_loc = loc + 1;
  loc = input_line.find(";", loc + 1);
  fats_amount_ = std::stoi(input_line.substr(prev_loc, loc - prev_loc);
  prev_loc = loc + 1;
  loc = input_line.find(";", loc + 1);
  protein_amount_ = std::stoi(input_line.substr(prev_loc, loc - prev_loc);
  calories_ = -1; //Once calories is included in food.csv, I will update this accordingly
}

void Food::add_Allergen(std::string new_allergen) {
  for (std::string s : allergens_) {
    if (s == new_allergen) { return; }
  }
  allergens_.push_back(new_allergen);
}
