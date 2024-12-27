import React from 'react';

const SearchBar = ({ searchTerm, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search vehicles..."
        value={searchTerm}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
