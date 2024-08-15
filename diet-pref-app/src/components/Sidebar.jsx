// Source: https://www.youtube.com/watch?v=5R9jFHlG6ik
// OR? https://www.youtube.com/watch?v=X9hnBtYQx0A

import ListGroup from "./ListGroup";
// import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import axios, { all } from "axios";
import { useState } from "react";
// import { SelectContext } from "../App"

const Sidebar = () => {
  let prefs = ["Gluten-Free", "Paleo", "Whole 30", "Vegan", "Vegetarian"];

  let cuisines = [
    "American",
    "Chinese",
    "Italian",
    "Korean",
    "Mexican",
    "Thai",
  ];

  let calories = [
    "(1, 500)",
    "(501, 1000)",
    "(1001, 1500)",
    "(1501, 2000)",
    "(2001, 2500)",
  ];

  let carbs = ["range 1", "range 2", "range 3"];

  let fats = ["range a", "range b", "range c"];

  let protein = ["range x", "range y", "range z"];

  const [allergen, setAllergen] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [cal, setCalories] = useState("");
  const [carb, setCarbs] = useState("");
  const [fat, setFats] = useState("");
  const [proteins, setProteins] = useState("");
  // const { setSelect } = useContext(SelectContext);

  function handleSubmit(e) {
    e.preventDefault();
    setSelect([true, allergen, cuisine, cal, carb, fat, proteins]);
    // setRend(true);

    console.log([allergen, cuisine, cal, carb, fat, proteins]);
  };

  // each stores a letter representing category + : + selection
  // Ex: c:Italian
  const handleAllergen = (item) => {
    // setAllergen("a:" + item);
    setAllergen(item);
  };

  const handleCuisine = (item) => {
    // setCuisine("c:" + item);
    setCuisine(item);
  };

  const handleCalories = (item) => {
    setCalories("r:" + item);
  };

  const handleCarbs = (item) => {
    setCarbs("b:" + item);
  };

  const handleFats = (item) => {
    setFats("f:" + item);
  };

  const handleProtein = (item) => {
    setProteins("p:" + item);
  };

  /*
  useEffect(() => {
    let processing = true;
    axiosFetchData(processing);
    return () => {
      processing = false;
    };
  });

  
  const axiosFetchData = async (processing: boolean) => {
    await axios
      .get("http://localhost:8080/data", {
        // how can I get these to TestTable?
        params: {
          pref: allergen,
          cuisine: cuisine,
          calories: cal,
          carbs: carb,
          fat: fat,
          protein: proteins,
        },
      })
      .then((res) => {
        if (processing) {
          setSelectData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  */

  return (
    <>
      <ListGroup
        items={prefs}
        heading="Allergen"
        onSelectItem={handleAllergen}
      />
      <ListGroup
        items={cuisines}
        heading="Cuisine Type"
        onSelectItem={handleCuisine}
      />
      <ListGroup
        items={calories}
        heading="Calorie Range"
        onSelectItem={handleCalories}
      />
      <ListGroup
        items={carbs}
        heading="Carbohydrate Range"
        onSelectItem={handleCarbs}
      />
      <ListGroup items={fats} heading="Fat Range" onSelectItem={handleFats} />
      <ListGroup
        items={protein}
        heading="Protein Range"
        onSelectItem={handleProtein}
      />

      <button type="submit" color="warning" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default Sidebar;
