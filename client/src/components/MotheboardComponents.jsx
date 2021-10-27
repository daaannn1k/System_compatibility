import React, { useState, useContext } from "react";
import motherboardArray from "../content/typesOfMotherboards.js";
import { Compatibility } from "../context/compatibilityContext.js";

const MotherBoard = () => {
  const [item, setItem] = useState({
    name: "motherboard",
    component: "",
  });
  const compatibility = useContext(Compatibility);

  const handleItem = (event) => {
    setItem({
      ...item,
      component: event.target.value,
    });
  };

  const handleArray = () => {
    if (item.component) {
      compatibility.addComponent(item.component, item.name);
      console.log("successfully added", compatibility.elements);
      setItem({
        name: "motherboard",
        component: "",
      });
    } else {
      console.log("choose something");
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor="motherboard">
        <strong>Choose your motherboard:</strong>
      </label>
      <select
        onChange={handleItem}
        name="motherboard"
        id="motherboard"
        className="form-select mb-3"
        aria-label="Default select example"
      >
        <option disabled="disabled">Open this select menu</option>
        {motherboardArray.map((item) => {
          return (
            <option key={item.id} value={item.model}>
              {item.model}
            </option>
          );
        })}
      </select>
      <button type="button" className="btn btn-secondary" onClick={handleArray}>
        select
      </button>
    </div>
  );
};

export default MotherBoard;
