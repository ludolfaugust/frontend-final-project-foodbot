import React from "react";
import { NavLink } from "react-router-dom";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
import "./IngredientList.css";

export default function IngredientList({ data, buttonAction }) {
  const ingIds = data.map((ing) => ing._id);

  return (
    <div className="Wrapper">
      {/* <div className="HeaderText">
        <p>
          Hi, I´m foodBot! I will make the best of your Ingredients. Just pick
          what you got and let me think about it...
        </p>
      </div> */}
      <div className="IngredientListContainer">
        <div className="IngredientList">
          <h2>My Ingredients</h2>
        </div>
        <div>
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
        </div>
        <div className="IngredientListSearchButtonContainer">
          <NavLink to={`/results?ingredients=${ingIds}`}>
            <button className="IngredientListSearchButton">See Recipes</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
