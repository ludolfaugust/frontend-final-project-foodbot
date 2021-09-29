import React from "react";

function Categories({ categories }) {
  return (
    <div>
      <div className="IngredientHeaderImg">
        <h1 className="BackgroundText2">Choose your categories</h1>
      </div>
      <div className="IngredientBox">
        {categories.map((category) => (
          <div className="IngredientContainer">
            <div className="IngredientTitle">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
