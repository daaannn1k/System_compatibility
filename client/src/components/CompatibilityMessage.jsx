import React from "react";

const CompatibilityMessage = (props) => {
  return (
    <div>
      {props.message.message.trim() ? (
        <div>
          <p>{props.message.message}</p>
          <button
            onClick={() => {
              props.onRefresh();
            }}
            className="btn btn-danger"
          >
            Reset
          </button>
        </div>
      ) : (
        "No message yet..."
      )}
    </div>
  );
};

export default CompatibilityMessage;
