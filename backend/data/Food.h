#include <string>
#include <vector>
class Food
{
    public:
        Food();
        Food(std::string input_line_);
        std::string get_Name() { return name_; };
        void set_Name(std::string new_name) { name_ = new_name; };
        std::vector<std::string> get_Allergens() { return allergens_; };
        void add_Allergen(std::string new_allergen);
        void clear_Allergens() { allergens_.clear(); };
        std::string get_Cuisine() { return cuisine_; };
        void set_Cuisine(std::string new_cuisine) { cuisine_ = new_cuisine; };
        int get_Protein() { return protein_amount_; };
        void set_Protein(int new_protein) { protein_amount_ = new_protein; };
        int get_Carbs() { return carbs_amount_; };
        void set_Carbs(int new_carbs) { carbs_amount_ = new_carbs; };
        int get_Fats() { return fats_amount_; };
        void set_Fats(int new_fats) {fats_amount_ = new_fats; };
        int get_Calories() { return calories_; };
        void set_Calories(int new_calories) {calories_ = new_calories; };
    private:
        std::string name_;
        std::vector<std::string> allergens_;
        std::string cuisine_;
        int protein_amount_;
        int carbs_amount_;
        int fats_amount_;
        int calories_;
};
