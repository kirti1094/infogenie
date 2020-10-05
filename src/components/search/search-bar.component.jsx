import React from "react";
import "./search.css";

export const SearchList = () => {
  return (
    <div className="search-list">
      <div className="total-suppression">
        <div>
          Total Supression Records:
          <span className="before-icon">15,500</span>
        </div>
      </div>

      {/* <input type="text" placeholder="Search" name="search"></input> */}
      <div className="search-container">
        <button className="list-actions">List Actions</button>
        <div className="vertical-dropdown">
          <a href="default.asp">Create Suppression List</a>
          <a href="default.asp">Add Supression Email</a>
          <a href="default.asp">Remove Supression Email</a>
        </div>
      </div>
    </div>
  );
};
