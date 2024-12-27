import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Vehicle Selling App</h1>
      <Link to="/vehicles">Browse Vehicles</Link>
    </div>
  );
};

export default HomePage;
