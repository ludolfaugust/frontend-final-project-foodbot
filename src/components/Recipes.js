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
              <b />
              {recipe.ingredients?.map((ingredient) => (
                <div>
                  <b />
                  <div className="IngredientContainer">
                    <div className="IngredientQuantity">
                      <p>{ingredient?.quantity} &nbsp;</p>
                    </div>
                    <div className="IngredientUnit">
                      {ingredient?.ingredient?.unit}
                    </div>
                    <p>&nbsp;of&nbsp;</p>
                    <p>{ingredient?.ingredient?.name}</p>
                  </div>
                </div>
              ))}
            </p>
            <br />
            <p className="Description">{recipe.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
