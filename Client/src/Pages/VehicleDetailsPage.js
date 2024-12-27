import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import vehicleService from '../services/vehicleService';

const VehicleDetailsPage = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    vehicleService.getVehicleById(id).then(data => setVehicle(data));
  }, [id]);

  return vehicle ? <VehicleDetail vehicle={vehicle} /> : <p>Loading...</p>;
};

export default VehicleDetailsPage;
