import React from 'react';
import './styles.css';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
      />
      <button className="search-button"><FaSearch /></button>
    </div>
  );
};

export default SearchBar;
