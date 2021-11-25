import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import "../App.css";
import "./Results.css";

function Results() {
  const [recipes, setRecipes] = useState([]);
  const { search } = useLocation();
  //const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://stormy-eyrie-86891.herokuapp.com/recipes${search}`)
      .then((res) => {
        //setIsLoading(false);
        setRecipes(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {!recipes.length ? (
        <div className="NoMatches">
          <h2> Sorry no matches Found, please try again</h2>
        </div>
      ) : (
        <>
          {/* <div> {isLoading ? (<div className="Loading">Sorry it's loading...</div>):()} */}
          <div className="Loading">
            <p>Bon Appetite</p>
          </div>
          <div className="ResultsRecipeContainer">
            {recipes.map((recipe) => (
              <div className="ResultsRecipe">
                <div className="ResultsRecipeTitle">
                  <h1>{recipe.name}</h1>
                </div>
                <div className="ResultsRecipeImage">
                  <Link to={`/recipes/${recipe._id}`}>
                    <img src={recipe.image} alt={recipe.name} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Results;
