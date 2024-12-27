import React from 'react'; // Ensure React is imported at the top

const SearchBar = ({ searchTerm, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input" // Add a class for custom styling
        placeholder="Search vehicles..."
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)} // Ensure the correct value is passed
      />
    </div>
  );
};

export default SearchBar;
