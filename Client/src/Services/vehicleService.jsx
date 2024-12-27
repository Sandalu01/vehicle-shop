const API_URL = 'https://api.example.com/vehicles';

const getAllVehicles = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

const getVehicleById = async id => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export default { getAllVehicles, getVehicleById };
