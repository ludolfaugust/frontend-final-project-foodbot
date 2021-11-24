import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import "../App.css";
import "./Results.css";

function Results() {
  const [recipes, setRecipes] = useState([]);
  const { search } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://stormy-eyrie-86891.herokuapp.com/recipes${search}`)
      .then((res) => {
        setIsLoading(false);
        setRecipes(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const message = "There are no search results. Please try a new search.";
  // const setResultNotFoundMsg = !res.data.data.length
  //         ? (message, console.log(message))
  //         :

  return (
    <div>
      {isLoading ? (
        <div className="Loading">
          <p>Loading - No need to worry...yet...</p>
        </div>
      ) : (
        <>
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
          <div className="NoMatches">
            <h2> Sorry no matches Found, please try again</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Results;
