import React, { useState } from "react";
import "./Ingredients.css";
import "../App.css";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Ingredients({ data, buttonAction, isLoading }) {
  const [clicked, setClicked] = useState(null);
  //const [isLoading, setIsLoading] = useState(false);

  const toggle = (index) => {
    const newClicked = clicked === index ? null : index;
    setClicked(newClicked);
  };

  //setIsLoading(true);
  //

  //console.log(data);
  return (
    <div className="Wrapper">
      {isLoading ? (
        <div className="Loading">
          <p>Loading - No need to worry...yet...:)</p>
        </div>
      ) : (
        <div className="Accordion">
          {Object.keys(data).map((el, index) => (
            <>
              <div onClick={() => toggle(index)} className="AccordionWrap">
                <h2>{el}</h2>
                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
              </div>
              {clicked === index ? (
                <div className="AccordionDropdown">
                  {data[el].map((item) => (
                    <button onClick={() => buttonAction(item)}>
                      {item.name}
                    </button>
                  ))}
                </div>
              ) : null}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
