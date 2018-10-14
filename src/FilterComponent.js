import React from "react";
import "./FilterComponent.css"

// Get input from user and filter content according to input string

const FilterComponent = props => {
  return (
    <div className="searchbar">
      <input
        className="form-control-lg"
        type="text"
        placeholder="Filter news by content"
        value={props.searchContent}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default FilterComponent;
