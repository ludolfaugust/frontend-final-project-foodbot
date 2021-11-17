import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Recipes.css";

function AllRecipes() {
  const [allRecipe, setAllRecipe] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("ughugh");
    axios
      .get("https://stormy-eyrie-86891.herokuapp.com/allrecipes")
      .then((res) => {
        setAllRecipe(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(allRecipe);
  return (
    <div>
      <div className="SelectedRecipeContainer">
        <div className="SelectedRecipe">
          <div className="SelectedRecipeImage">
            <img src={allRecipe.image} alt={allRecipe.name} />
          </div>
          <div className="SelectedRecipeTitle"></div>
          <div>
            <h1>{allRecipe.name}</h1>

            <p>
              <b />
              {allRecipe.ingredients?.map((ingredient) => (
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
            <p className="Description">{allRecipe.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllRecipes;
