// attempting to combine App, Sidebar and TestTable
// resource re: refreshing datatable on button click:
// https://stackoverflow.com/questions/70397397/trigger-axios-data-fetch-on-button-click-in-another-component

// source for sidebar: https://www.youtube.com/watch?v=SqcY0GlETPk

import { DataTable } from "primereact/datatable";
import Map from "./components/Map";
import { Column } from "primereact/column";
import SplitScreen from "./components/SplitScreen";
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";

function App2() {
    const [allergen, setAllergen] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [cal, setCalories] = useState("");
    const [carb, setCarbs] = useState("");
    const [fat, setFats] = useState("");
    const [proteins, setProteins] = useState("");
    const [selectData, setSelectData] = useState([]);
    const [fetch, setFetch] = useState(false);
    const [selectedA, setSelectedA] = useState(-1);
    const [selectedC, setSelectedC] = useState(-1);
    const [selectedCal, setSelectedCal] = useState(-1);
    const [selectedCarb, setSelectedCarb] = useState(-1);
    const [selectedFat, setSelectedFat] = useState(-1);
    const [selectedPro, setSelectedPro] = useState(-1);

    useEffect(() => {
        if (fetch) {
            axios.get("http://localhost:8080/data", {
                params: {
                    a: allergen,
                    c: cuisine,
                    r: cal,
                    b: carb,
                    f: fat,
                    p: proteins
                }
            })
            .then(function(response) {
                setSelectData(response.data)
            })
        }
        return function () {
            setFetch(false);
            setAllergen("");
            setCuisine("");
            setCalories("");
            setCarbs("");
            setFats("");
            setProteins("");
            setSelectedA(-1);
            setSelectedC(-1);
            setSelectedCal(-1);
            setSelectedCarb(-1);
            setSelectedFat(-1);
            setSelectedPro(-1);

        }
    }, [fetch]);

    function Sidebar () {
        let allergens = ["Dairy", "Egg", "Fish", "Gluten", "Sesame", "Soy"];
    
        let cuisines = [
        "American",
        "British",
        "Cuban",
        "French",
        "Hawaiian",
        "Italian",
        "Vegetarian"
        ];
    
        let calories = [
        "(1, 500)",
        "(501, 1000)",
        "(1001, 1500)",
        "(1501, 2000)",
        "(2001, 2500)"
        ];
    
        let carbs = ["(0, 50)", "(51, 100)", "(101, 150)", "(151, 200)"];
    
        let fats = ["(0, 25)", "(26, 50)", "(51, 75)", "(76, 100)"];
    
        let protein = ["(0, 25)", "(26, 50)", "(51, 75)", "(76, 100)"];
    
        return (
        <>
            <h1>Allergen</h1>
            <ul className="list-group">
                {allergens.map((allergen, index) => (
                <li
                    className={
                    selectedA === index
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    key={allergen}
                    onClick={() => {
                    setSelectedA(index);
                    setAllergen('a:' + allergen);
                    }}
                >
                    {allergen}
                </li>
                ))}
            </ul>

            <h1>Cuisine</h1>
            <ul className="list-group">
                {cuisines.map((cuisine, index) => (
                <li
                    className={
                    selectedC === index
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    key={cuisine}
                    onClick={() => {
                    setSelectedC(index);
                    setCuisine('c:' + cuisine);
                    }}
                >
                    {cuisine}
                </li>
                ))}
            </ul>
            
            <h1>Calories</h1>
            <ul className="list-group">
                {calories.map((calorie, index) => (
                <li
                    className={
                    selectedCal === index
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    key={calorie}
                    onClick={() => {
                    setSelectedCal(index);
                    setCalories('r:' + calorie);
                    }}
                >
                    {calorie}
                </li>
                ))}
            </ul>

            <h1>Carbs</h1>
            <ul className="list-group">
                {carbs.map((carb, index) => (
                <li
                    className={
                    selectedCarb === index
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    key={carb}
                    onClick={() => {
                    setSelectedCarb(index);
                    setCarbs('b:' + carb);
                    }}
                >
                    {carb}
                </li>
                ))}
            </ul>

            <h1>Fat</h1>
            <ul className="list-group">
                {fats.map((fat, index) => (
                <li
                    className={
                    selectedFat === index
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    key={fat}
                    onClick={() => {
                    setSelectedFat(index);
                    setFats('f:' + fat);
                    }}
                >
                    {fat}
                </li>
                ))}
            </ul>

            <h1>Protein</h1>
            <ul className="list-group">
                {protein.map((pro, index) => (
                <li
                    className={
                    selectedPro === index
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                    key={pro}
                    onClick={() => {
                    setSelectedPro(index);
                    setProteins('p:' + pro);
                    }}
                >
                    {pro}
                </li>
                ))}
            </ul>
    
            <button type="submit" color="warning" onClick={() => setFetch(true)}>
                Submit
            </button>
        </>
        );
    }

    function FoodTable () {

        return (
        <>
        <DataTable title="Results" value={selectData}>
            <Column field="restaurant" header="Restaurant" />
            <Column field="cuisine" header="Cuisine" sortable />
            <Column field="allergens" header="Allergens" sortable />
            <Column field="name" header="Menu Item" />
            <Column field="calories" header="Calories" sortable />
            <Column field="carbs" header="Carbs" sortable />
            <Column field="fats" header="Fat" sortable />
            <Column field="protein" header="Protein" sortable />
        </DataTable>
        </>
        )
    }

    function LeftComp() {
    return (
        <Sidebar />
    );
    }

    
    function RightComp() {
        return (
            <>
            <Map />
            <FoodTable />
            </>
        )
    }
  
    return (
        <>
        <SplitScreen leftWeight={1} rightWeight={3}>
            <LeftComp />
            <RightComp />
        </SplitScreen>
        </>
    )
}

export default App2;
