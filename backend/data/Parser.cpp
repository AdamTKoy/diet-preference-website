#include "Parser.h"

std::vector<Restaurant>* Parser::restaurantParser(const std::string& filename)
{
    // Create new Restaurant List vector
    std::vector <Restaurant>* restaurant_list = new std::vector<Restaurant>;
    
    // Read in the given file
    std::fstream my_file;
    my_file.open(filename, std::ios::in);

    if (my_file.is_open()) {
        // Declare File Line
        std::string line;

        // Declare Variables
        std::string restaurant_name;
        double x_coord;
        double y_coord;
        std::vector <Food>* menu;

       
        while (getline(my_file, line)) {
 
            // Go through line for first, second, and third comma locations
            size_t firstComma = line.find(",", 0);
            size_t secondComma = line.find(",", firstComma + 1);
            size_t thirdComma = line.find(",", secondComma + 1);
   
                // Set variables based on file content
                restaurant_name = line.substr(0, firstComma);
                x_coord = line.substr(firstComma + 1, secondComma-firstComma-1);
                y_coord = line.substr(secondComma + 1, thirdComma-secondComma-1);

                // Make sure the Menu information is in the proper format
                
 
                // create new Restaurant using data
                Restaurant *curr_Restaurant = new Restaurant(restaurant_name, x_coord, y_coord, menu);
 
                // add Restaurant to vector
                restaurant_list->push_back(*curr_Restaurant);    
         }
 
        my_file.close();
     }
 
    // Return Restaurant List vector
    return restaurant_list;
}