import React from "react";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
import "./IngredientList.css";

export default function IngredientList({ data, buttonAction }) {
  return (
    <>
      <div className="IngredientListContainer">
        <div className="IngredientList">
          <h2>My Ingredients</h2>
        </div>

        {data.map((el) => (
          // <div className="IngriedientListButtonContainer">
          <button
            className="IngredientListButton"
            onClick={() => buttonAction(el)}
          >
            {el.name}
          </button>

          //</div>
        ))}

        <div className="IngredientListSearchButtonContainer">
          <button className="IngredientListSearchButton">See Recipes</button>
        </div>
      </div>
    </>
  );
}
