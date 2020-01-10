import React from "react";
import "./style.css";

const Button = props => {
  return (
    <div onClick={props.onClick} className="button">
      AddOn
    </div>
  );
};
export default Button;
