import React, { useState, useContext } from "react";
import videocardArray from "../content/typesofVideocards.js";
import { Compatibility } from "../context/compatibilityContext.js";

const VideoCard = () => {
  const [item, setItem] = useState({
    name: "videocard",
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
        name: "videocard",
        component: "",
      });
    } else {
      console.log("choose something");
    }
  };
  return (
    <div className="mb-3">
      <label htmlFor="videocard">
        <strong>Choose your videocard:</strong>
      </label>
      <select
        onChange={handleChange}
        id="videocard"
        name="videocard"
        className="form-select mb-3"
        aria-label="Default select example"
      >
        <option disabled="disabled">Open this select menu</option>
        {videocardArray.map((item) => {
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

export default VideoCard;
