import React from 'react'; 

const SearchBar = ({ searchTerm, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input" 
        placeholder="Search vehicles..."
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  );
};

export default SearchBar;
