import "./App.css";
import "./resetter.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import IngredientList from "./components/IngredientList";
import Recipes from "./components/Recipes";
import Navbar from "./components/Navbar";
import { groupByCategory } from "./utils";
import Results from "./components/Results";
import BackgroundTop from "./components/BackgroundTop";
import Footer from "./components/Footer";
import About from "./components/About";
import AllRecipes from "./components/AllRecipes";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("https://stormy-eyrie-86891.herokuapp.com/ingredients")
      .then((res) => {
        const newData = groupByCategory(res.data.data);
        setData(newData);
      });
  }, []);

  const addOrRemove = (ingredient) => {
    const newSelectedIngredients = selectedIngredients.some(
      (selected) => ingredient._id === selected._id
    )
      ? selectedIngredients.filter(
          (selected) => selected._id !== ingredient._id
        )
      : [...selectedIngredients, ingredient];

    setSelectedIngredients(newSelectedIngredients);
  };

  return (
    <div className="App">
      <header>
        <Navbar />
        <BackgroundTop />
      </header>
      <Switch>
        <Route exact path to="/">
          <IngredientList
            data={selectedIngredients}
            buttonAction={addOrRemove}
          />
          <Ingredients data={data} buttonAction={addOrRemove} />
        </Route>
        <Route path="/recipes/:id">
          <Recipes />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/allRecipes">
          <AllRecipes />
        </Route>
      </Switch>
      <Footer>
        <Footer />
      </Footer>
    </div>
  );
}

export default App;
