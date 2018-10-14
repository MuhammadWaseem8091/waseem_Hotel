import React from "react";

// Get input from user and filter content according to input string

const FilterComponent = props => {
  return (
    <div className="search">
      <input
        class="form-control"
        type="text"
        placeholder="Search for your favourite news content"
        value={props.searchContent}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default FilterComponent;
