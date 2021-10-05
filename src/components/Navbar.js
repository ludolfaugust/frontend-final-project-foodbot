import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="NavContainer">
      <div className="NavLeft">
        <Link to={"/"}>
          <p className="thin">foodBot</p>
        </Link>
      </div>
      <div className="thinCenter">!Delicious LowCarb Veg Only Recipes!</div>
      <div className="NavRight">
        <ul>
          <NavLink className="NavLink" to="/">
            Ingredients
          </NavLink>
          {/* <NavLink className="NavLink" to="/recipes">
            Recipes
          </NavLink>
          <NavLink className="NavLink" to="/results">
            Results
          </NavLink> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
