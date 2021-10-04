import React, { useState } from "react";
import "./Ingredients.css";
import "../App.css";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Ingredients({ data, buttonAction }) {
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    const newClicked = clicked === index ? null : index;
    setClicked(newClicked);
  };

  //console.log(data);
  return (
    <div className="Wrapper">
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
    </div>
  );
}
