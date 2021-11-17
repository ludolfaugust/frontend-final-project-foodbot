import React from "react";
import { NavLink } from "react-router-dom";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
import "./IngredientList.css";

export default function IngredientList({ data, buttonAction }) {
  const ingIds = data.map((ing) => ing._id);
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="HeaderTextContainer">
        <div className="HeaderText">
          <p>
            Pick your ingredients from the drop Down Menue below and I will turn
            them into nice vegetarian lowCarb recipes!
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
