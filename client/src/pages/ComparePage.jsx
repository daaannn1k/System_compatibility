import React, { useContext, useEffect, useState } from "react";
import { Compatibility } from "../context/compatibilityContext.js";
import VideoCard from "../components/VideocardComponents.jsx";
import MotherBoard from "../components/MotheboardComponents.jsx";
import RAM from "../components/RAMComponents.jsx";
import SelectedItems from "../components/SelectedItems.jsx";
import useHttp from "../hooks/http.hook.js";
import CompatibilityMessage from "../components/CompatibilityMessage.jsx";
import Spinner from "../components/Spinner.jsx";
import { AlertContext } from "../context/alertContext.js";
import { NavLink } from "react-router-dom";

const ComparePage = () => {
  const [message, setMessage] = useState({
    message: "",
  });
  const [disableBtn, setDisableBtn] = useState(true);
  const { elements, deleteComponent, emptyArray } = useContext(Compatibility);
  const { showLoader, hideLoader, display } = useContext(AlertContext);
  const { request } = useHttp();
  useEffect(() => {
    if (elements.length === 3) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [elements]);
  const checkCompatibility = async () => {
    try {
      showLoader(true);
      const data = await request("/myapp/compatibilityroute", "POST", elements);
      hideLoader();
      handleMessage(data.message);
    } catch (e) {}
  };
  const handleMessage = (mess) => {
    setMessage((prevValue) => {
      return { ...prevValue, message: mess };
    });
  };
  const refresh = () => {
    setMessage({
      message: "",
    });
    emptyArray();
  };
  return (
    <div className="container comparePageContainer">
      <div className="row">
        <div className="col-lg-4 col-md comparePageColumn">
          <MotherBoard />
          <VideoCard />
          <RAM />
          <NavLink to="/compatibility">
            <button className="btn btn-outline-dark mt-3">Back</button>
          </NavLink>
        </div>

        <div className="col-lg-4 col-md comparePageColumn">
          {elements.length ? (
            <div>
              <i>
                In order to activate <strong>check button</strong>, you have to
                choose 3 components, 1 of each
              </i>
              <ul>
                {elements.map((item, index) => {
                  return (
                    <SelectedItems
                      key={index}
                      id={index}
                      type={item.name}
                      component={item.component}
                      onDelete={deleteComponent}
                    />
                  );
                })}
              </ul>
              <button
                onClick={checkCompatibility}
                type="button"
                className="btn btn-success"
                disabled={disableBtn}
              >
                Check
              </button>
            </div>
          ) : (
            "No selected items"
          )}
        </div>

        <div className="col-lg-4 col-md comparePageColumn">
          {!display ? (
            <CompatibilityMessage message={message} onRefresh={refresh} />
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </div>
  );
};
export default ComparePage;
