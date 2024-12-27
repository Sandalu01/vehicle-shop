import React from 'react';

const VehicleDetail = ({ vehicle }) => {
  return (
    <div className="vehicle-detail">
      <img src={vehicle.image} alt={vehicle.name} />
      <h2>{vehicle.name}</h2>
      <p>{vehicle.description}</p>
      <p>Category: {vehicle.category}</p>
      <p>Price: ${vehicle.price}</p>
    </div>
  );
};

export default VehicleDetail;
