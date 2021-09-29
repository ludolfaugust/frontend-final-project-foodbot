import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { IconContext } from "react-icons";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
        <App />
      </IconContext.Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
