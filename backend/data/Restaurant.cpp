#include "Restaurant.h"
#include "Parser.h"

Restaurant::Restaurant()
{
    name = "";
    x_coord = 0;
    y_coord = 0;
    std::vector <Food>* my_menu;
    menu = my_menu;
}

Restaurant::Restaurant(std::string _name, double _x_coord, double _y_coord, std::vector<Food*> _menu)
{
    name = _name;
    x_coord = _x_coord;
    y_coord = _y_coord;
    for (size_t x = 0; x < _menu.size(); x++)
    {
        menu.at(x) = _menu.at(x);
    } 
}

std::string Restaurant::get_name()
{
    return name;
}

double Restaurant::get_x_coord()
{
    return x_coord;
}

double Restaurant::get_y_coord()
{
     return y_coord;
}

std::vector<Food*> Restaurant::get_menu()
{
    return menu;
}

Food* Restaurant::get_food(size_t index)
{
    return menu.at(index);
}


void Restaurant::set_name(std::string new_name)
{
    name = new_name;
}

void Restaurant::set_x_coord(double new_x_coord)
{
    x_coord = new_x_coord;
}

void Restaurant::set_y_coord(double new_y_coord)
{
    y_coord = new_y_coord;
}

void Restaurant::set_menu(std::vector<Food*> new_menu)
{
    for (size_t x = 0; x < new_menu.size(); x++)
    {
        menu.at(x) = new_menu.at(x);
    } 
}

void Restaurant::set_food(Food* new_food, size_t index)
{
    menu.at(index) = new_food;
}