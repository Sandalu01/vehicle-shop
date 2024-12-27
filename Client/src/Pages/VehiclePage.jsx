import React, { useState, useEffect } from 'react';
import VehicleList from '../components/VehicleList';
import SearchBar from '../Components/SearchBar'
import vehicleService from '../services/vehicleService';

const VehiclePage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    vehicleService.getAllVehicles().then(data => setVehicles(data));
  }, []);

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <VehicleList vehicles={filteredVehicles} />
    </div>
  );
};

export default VehiclePage;
