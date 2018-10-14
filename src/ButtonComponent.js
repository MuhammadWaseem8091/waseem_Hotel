import React from "react";
import "./ButtonComponent.css"

const ButtonComponent = props => {
  
  const { children, index, handleClick } = props;

  const argument = children === "Delete" ? index : "";

  return (
    <div className="button">
      <button
        onClick={() => handleClick(argument)}
        className="btn btn-secondary btn-lg m-2"
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
