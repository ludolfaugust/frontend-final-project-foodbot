import React from "react";

function Posts({ ingredients }) {
  return (
    <div>
      <div className="IngredientHeaderImg">
        <h1 className="BackgroundText2">Choose your ingredients</h1>
      </div>
      <div className="IngredientBox">
        {ingredients.map((ingredient) => (
          <div className="IngredientContainer">
            <div className="IngredientTitle">{ingredient.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Posts;
