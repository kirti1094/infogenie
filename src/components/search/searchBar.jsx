import React, { useState } from "react";
import "./search.css";
import SearchBar from "./search-bar.component";
import jsonData from "../data/users1";

export default () => {
  const [tweets, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = jsonData;
    data.find;
  };
  return (
    <div className="search-list">
      <div className="total-suppression">
        <div>
          Total Supression Records:
          <span className="before-icon">15,500</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></SearchBar>
      </form>
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
