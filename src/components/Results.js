import React from "react";
import "../App.css";
import "./Results.css";

function Results({ recipes }) {
  return (
    <div>
      <div className="ResultsRecipeContainer">
        {recipes.map((recipe) => (
          <div className="ResultsRecipe">
            <div className="ResultsRecipeTitle">
              <h1>{recipe.name}</h1>
            </div>
            <div className="ResultsRecipeImage">
              <img src={recipe.image} alt={recipe.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
