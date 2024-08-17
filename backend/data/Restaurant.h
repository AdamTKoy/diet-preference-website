#include <string>
#include <vector>
#include "Food.h"

class Restaurant
{
    public:
    Restaurant();
    Restaurant(std::string input_line_);

    std::string get_name();
    float get_x_coord();
    float get_y_coord();
    float get_low_price();
    float get_high_price();
    //std::vector<Food> get_menu();

    void set_name(std::string new_name);
    void set_x_coord(float new_x_coord);
    void set_y_coord(float new_y_coord);
    void set_low_price(float new_low_price);
    void set_high_price(float new_high_price);
    //void set_menu(std::vector<Food> new_menu);

    private:
    std::string name;
    float x_coord;
    float y_coord;
    float low_price;
    float high_price;
    //std::vector<Food> menu;
};