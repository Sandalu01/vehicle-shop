import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, InputGroup } from 'react-bootstrap';
import vehicleService from '../Services/vehicleService';

const VehiclePage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    vehicleService.getAllVehicles().then(data => setVehicles(data));
  }, []);

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //you have to pass the data from the mongodb service for api compatibility

  return (
    <>

  
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">Explore Our Vehicles</h1>
        <p className="lead">Find the perfect vehicle that fits your needs and budget!</p>
      </div>

      <Container className="py-5">
        {/* Search Bar */}
        <Row className="mb-4">
          <Col>
            <InputGroup>
              <InputGroup.Text>
                <i className="bi bi-search"></i>
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search for a vehicle..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </Col>
        </Row>

        {/* Vehicle List */}
        <Row>
          {filteredVehicles.map(vehicle => (
            <Col md={4} className="mb-4" key={vehicle.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={vehicle.image} alt={vehicle.name} />
                <Card.Body>
                  <Card.Title>{vehicle.name}</Card.Title>
                  <Card.Text>
                    Price: ${vehicle.price.toLocaleString()}
                  </Card.Text>
                  <Card.Text>
                    {vehicle.description.length > 100
                      ? vehicle.description.slice(0, 100) + '...'
                      : vehicle.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Available: {vehicle.availability ? 'Yes' : 'No'}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        {/* No Results Message */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-5">
            <h4 className="text-muted">No vehicles found matching your search.</h4>
          </div>
        )}
      </Container>
    </div>
      <div className="bg-secondary text-white text-center py-5">
      <h2>Ready to Find Your Perfect Vehicle?</h2>
      <p className="mt-3">Browse our inventory and drive away in your dream car today!</p>
    </div>
    </>
  );
};

export default VehiclePage;
