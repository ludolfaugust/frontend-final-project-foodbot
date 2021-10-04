import React from "react";
import { useParams } from "react-router-dom";
import "./Recipes.css";

function Recipes({ recipes }) {
  const { id } = useParams();
  return (
    <div>
      <div className="SelectedRecipeContainer">
        {recipes
          .filter((recipe) => recipe._id === id)
          .map((recipe) => (
            <div className="SelectedRecipe">
              <div className="SelectedRecipeImage">
                <img src={recipe.image} alt={recipe.name} />
              </div>
              <div className="SelectedRecipeTitle"></div>
              <div>
                <h1>{recipe.name}</h1>
                <p>
                  {recipe.ingredients.map((ingredient) => (
                    <div>
                      <p>
                        {ingredient?.quantity}
                        {ingredient?.ingredient?.unit}
                      </p>
                      <p>{ingredient?.ingredient?.name}</p>
                    </div>
                  ))}
                </p>
                <p>{recipe.description}</p>
                {/* <p>
                {recipes.map((recipe) => (
                  <p>{recipe.description}</p>
                ))}
              </p> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Recipes;
