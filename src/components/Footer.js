import React from "react";
import "./Footer.css";
import { Link, NavLink, Switch, Route } from "react-router-dom";

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterLeft">
        <Link to={"/"}>
          <p className="thin">foodBot</p>
        </Link>
      </div>
      <div className="FooterRight">
        <ul>
          <NavLink className="NavLink" to="/about">
            About
          </NavLink>
          <NavLink className="NavLink" to="/impressum">
            Impressum
          </NavLink>
        </ul>
      </div>
      <div>
        <Switch>
          <Route></Route>
        </Switch>
      </div>
    </div>
  );
}

export default Footer;
