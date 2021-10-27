import React, { useState, useContext } from "react";
import ramsArray from "../content/typesOfRAM.js";
import { Compatibility } from "../context/compatibilityContext.js";

const RAM = () => {
  const [item, setItem] = useState({
    name: "ram",
    component: "",
  });
  const compatibility = useContext(Compatibility);

  const handleChange = (event) => {
    setItem({
      ...item,
      component: event.target.value,
    });
  };

  const handleArray = () => {
    if (item.component) {
      compatibility.addComponent(item.component, item.name);
      setItem({
        name: "ram",
        component: "",
      });
    } else {
      console.log("choose something");
    }
  };
  return (
    <div className="mb-3">
      <label htmlFor="ram">
        <strong>Choose your RAM:</strong>
      </label>
      <select
        onChange={handleChange}
        id="ram"
        name="ram"
        className="form-select mb-3"
        aria-label="Default select example"
      >
        <option disabled="disabled">Open this select menu</option>
        {ramsArray.map((item) => {
          return (
            <option key={item.id} value={item.model}>
              {item.model}
            </option>
          );
        })}
      </select>
      <button onClick={handleArray} type="button" className="btn btn-secondary">
        select
      </button>
    </div>
  );
};

export default RAM;
