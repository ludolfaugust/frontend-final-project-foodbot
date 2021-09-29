import "./App.css";
import "./resetter.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
import { groupByCategory } from "./utils";

import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://stormy-eyrie-86891.herokuapp.com/ingredients")
      .then((res) => {
        const newData = groupByCategory(res.data.data);
        setData(newData);
      });
  }, []);

  // const ingredientUrl = "https://stormy-eyrie-86891.herokuapp.com/ingredients";
  // const [ingredients, setIngredients] = useState([]);

  // useEffect(() => {
  //   axios.get(ingredientUrl).then((response) => {
  //     //console.log(ingredients);
  //     setIngredients(response.data.data);
  //   });
  // }, []);
  // console.log(ingredients);
  // const categoryUrl = "https://stormy-eyrie-86891.herokuapp.com/categories";
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   axios.get(categoryUrl).then((response) => {
  //     console.log(categories);
  //     setCategories(response.data.data);
  //   });
  // }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Switch>
        <Route exact path to="/">
          <Ingredients data={data} />
        </Route>
        <Route exact path="/recipes">
          <Recipes />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
