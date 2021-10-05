import React from "react";
import { NavLink } from "react-router-dom";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
import "./IngredientList.css";

export default function IngredientList({ data, buttonAction }) {
  const ingIds = data.map((ing) => ing._id);

  return (
    <>
      <div className="HeaderTextContainer">
        <div className="HeaderText">
          <p>
            Hi, I´m foodBot! I will make the best of your Ingredients. Just pick
            what you got and let me think about it...To give you a wide variety
            of different Recipes I won´t insist on all the spices. If you don´t
            have all the spices that should be added to the recipe you can find
            an alternative yourself. I trust in your creativity. I will serve
            you with great ideas and the main ingredients needed, you can
            finalize the recipe with your own brainwork.
          </p>
        </div>
      </div>
      <div className="IngredientListContainer">
        <div className="YourIngredients">
          <h2>Your Ingredients</h2>
        </div>
      </div>
      <div className="Wrappe">
        <div className="IngredientListWrapper">
          {data.map((el) => (
            <div className="IngriedientListButtonContainer">
              <button
                className="IngredientListButton"
                onClick={() => buttonAction(el)}
              >
                {el.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="IngredientListSearchButtonContainer">
        <NavLink to={`/results?ingredients=${ingIds}`}>
          <button className="IngredientListSearchButton">See Recipes</button>
        </NavLink>
      </div>
    </>
  );
}
