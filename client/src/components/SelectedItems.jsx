import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const SelectedItems = (props) => {
  return (
    <div className="d-flex align-items-center ">
      <div className="flex-grow-1">
        <li>
          <strong>{props.type}</strong>
          &nbsp;
          {props.component}
        </li>
      </div>

      <DeleteForeverIcon
        className="text-danger"
        onClick={() => props.onDelete(props.id)}
      />
    </div>
  );
};

export default SelectedItems;
