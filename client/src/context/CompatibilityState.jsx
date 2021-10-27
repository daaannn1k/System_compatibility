import React, { useReducer } from "react";
import { Compatibility } from "./compatibilityContext.js";
import { compatibilityReducer } from "./compatibilityReducer.js";
import { ADD_NOTE, DELETE_NOTE, EMPTY_ARRAY } from "./types.js";

const CompatibilityState = ({ children }) => {
  const initialState = {
    elements: [],
    message: {
      themessage: "",
    },
  };

  const [state, dispatch] = useReducer(compatibilityReducer, initialState);

  const addComponent = (component, name) => {
    dispatch({
      type: ADD_NOTE,
      payload: { component, name },
    });
  };

  const deleteComponent = (index) => {
    dispatch({
      type: DELETE_NOTE,
      payload: index,
    });
  };

  const emptyArray = () => {
    dispatch({
      type: EMPTY_ARRAY,
    });
  };

  return (
    <Compatibility.Provider
      value={{
        addComponent,
        deleteComponent,
        emptyArray,
        elements: state.elements,
      }}
    >
      {children}
    </Compatibility.Provider>
  );
};

export default CompatibilityState;
