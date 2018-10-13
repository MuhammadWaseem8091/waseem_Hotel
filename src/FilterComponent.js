import React from "react";

// Get input from user and filter content according to input string

const FilterComponent = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search news content"
        value={props.searchContent}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default FilterComponent;
