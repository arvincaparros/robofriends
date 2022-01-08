import React from "react";
import './SearchBox.css';

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className="search-container">
      <input 
        type='text' 
        id="searchBox" 
        placeholder='Search Robot'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;