import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { SHOW_ALERT, HIDE_ALERT, SHOW_LOADER, HIDE_LOADER } from "./types";
import { alertReducer } from "./alertReducer";

const AlertState = ({ children }) => {
  const initialState = {
    visible: false,
    display: false,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const showAlert = (status) => {
    dispatch({ type: SHOW_ALERT, payload: status });
  };
  const hideAlert = () => {
    dispatch({ type: HIDE_ALERT });
  };

  const showLoader = (status) => {
    dispatch({ type: SHOW_LOADER, payload: status });
  };
  const hideLoader = () => {
    dispatch({ type: HIDE_LOADER });
  };
  return (
    <AlertContext.Provider
      value={{
        showAlert,
        hideAlert,
        visible: state.visible,
        showLoader,
        hideLoader,
        display: state.display,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;
