import React from "react";
import { NavLink } from "react-router-dom";

const ComputerComponents = () => {
  return (
    <div className="container mt-5">
      <h2>Hello, my friend</h2>
      <br />
      <h3>
        A family of computer models is said to be compatible if certain software
        that runs on one of the models can also be run on all other models of
        the family. The computer models may differ in performance, reliability
        or some other characteristic. These differences may affect the outcome
        of the running of the software. There are 3 types of system
        compatibility:
      </h3>
      <h4>
        <strong>So let's check your system compatibility</strong>
      </h4>
      <NavLink to="/compatibility/compare">
        <button className="btn btn-secondary">Let's check</button>
      </NavLink>
    </div>
  );
};

export default ComputerComponents;
