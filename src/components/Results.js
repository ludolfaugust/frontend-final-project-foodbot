import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import "../App.css";
import "./Results.css";

function Results() {
  const [recipes, setRecipes] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`https://stormy-eyrie-86891.herokuapp.com/recipes${search}`)
      .then((res) => setRecipes(res.data.data));
  }, []);

  return (
    <div>
      <div className="ResultsRecipeContainer">
        {recipes.map((recipe) => (
          <div className="ResultsRecipe">
            <div className="ResultsRecipeTitle">
              <h1>{recipe.name}</h1>
            </div>
            <div className="ResultsRecipeImage">
              <Link to={`/recipes/${recipe._id}`}>
                <img src={recipe.image} alt={recipe.name} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
