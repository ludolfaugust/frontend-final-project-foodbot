import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="NavContainer">
      <div className="NavLeft">
        <p className="thin">foodBot</p>
      </div>
      <div className="NavRight">
        <ul>
          <NavLink className="NavLink" to="/">
            Ingredients
          </NavLink>
          <NavLink className="NavLink" to="/recipes">
            Recipes
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
