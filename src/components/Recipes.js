import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Recipes.css";

function Recipes() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    console.log("ughugh");
    axios
      .get(`https://stormy-eyrie-86891.herokuapp.com/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data.data);
      });
  }, []);

  console.log(recipe);
  return (
    <div>
      <div className="SelectedRecipeContainer">
        <div className="SelectedRecipe">
          <div className="SelectedRecipeImage">
            <img src={recipe.image} alt={recipe.name} />
          </div>
          <div className="SelectedRecipeTitle"></div>
          <div>
            <h1>{recipe.name}</h1>
            <p>
              {recipe.ingredients?.map((ingredient) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
