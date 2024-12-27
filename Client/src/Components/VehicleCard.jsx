import React from 'react';

const VehicleCard = ({ vehicle }) => {
  return (
    <div className="vehicle-card">
      <img src={vehicle.image} alt={vehicle.name} />
      <h3>{vehicle.name}</h3>
      <p>${vehicle.price}</p>
    </div>
  );
};

export default VehicleCard;
