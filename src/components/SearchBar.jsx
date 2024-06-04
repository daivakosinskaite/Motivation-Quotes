import React from 'react';

function SearchBar({ searchQuery, handleSearch }) {
  return (
    <input
      type="text"
      placeholder="Paieška"
      value={searchQuery}
      onChange={handleSearch}
      className="search-input"
    />
  );
}

export default SearchBar;
