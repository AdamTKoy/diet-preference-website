#include <vector>
#include <map>
#include <string>
#include <iostream>
#include <fstream>
#include <sstream>
#include <typeinfo>
#include <cstring>
#include <stdexcept>
#include "Restaurant.h"

//parses data from the datasets
class Parser {
public:
    // parser functions here
    std::vector<Restaurant>* restarauntParser(const std::string& filename);
private:

};