import React, { useState } from "react";
import "./Ingredients.css";
import "../App.css";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function Ingredients({ data }) {
  const [clicked, setClicked] = useState(null);
  const [selected, setSelected] = useState([]);

  const addIngredient = (newIngredient) => {
    setSelected([...selected, newIngredient]);
  };

  const toggle = (index) => {
    const newClicked = clicked === index ? null : index;
    setClicked(newClicked);
  };

  //console.log(data);
  return (
    <>
      <div className="Background"></div>
      <div className="Input">
        <input
          type="text"
          placeholder="Choose your ingredients by clicking the buttons below!"
          name="text"
          className="IngredientsInput"
          value={selected}
        />
      </div>
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
                  <button onClick={addIngredient}>{item.name}</button>
                ))}
              </div>
            ) : null}
          </>
        ))}
      </div>
    </>
  );
}

// function Ingredients({ categories, ingredients }) {
//   const [clicked, setClicked] = useState(false);

//   const toggle = (index) => {
//     if (clicked === index) {
//       return setClicked(null);
//     }
//     setClicked(index);
//   };

//   return (
//     <div>
//       <div className="Background"></div>
//       <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
//         <div className="AccordionSection">
//           <div className="Container">
//             {categories.map((category, index) => (
//               <button
//                 className="Wrap"
//                 onClick={() => toggle(index)}
//                 key={index}
//               >
//                 <h1>{category.name}</h1>
//                 <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
//               </button>
//             ))}
//             {/* {clicked === index ? (
//             <div className="Dropdown">
//               {ingredients.map((ingredient) => (
//                 <button className="IngredientButton">{ingredient.name}</button>
//               ))}
//             </div>
//           ) : null} */}
//           </div>
//         </div>
//       </IconContext.Provider>
//     </div>
//   );
// }

// export default Ingredients;
