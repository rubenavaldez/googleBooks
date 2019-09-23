import React from "react";
import "./style.css";

function ViewBtn(props) {
  return (
    <a href={props.link} target="_blank" alt={props.title} {...props}>
      <button className="btn btn-info view-btn">
        View
      </button>
    </a>
  );
}

export default ViewBtn;