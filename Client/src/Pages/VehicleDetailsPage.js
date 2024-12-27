import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Card, Button } from 'react-bootstrap';
import vehicleService from '../services/vehicleService';

const VehicleDetailsPage = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    vehicleService.getVehicleById(id).then(data => setVehicle(data));
  }, [id]);

  return (
    <div>
      {/* Page Wrapper */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">Vehicle Details</h1>
        <p className="lead">Explore the specifications and features of your selected vehicle.</p>
      </div>

      <Container className="py-5">
        {vehicle ? (
          <Row className="justify-content-center">
            {/* Vehicle Image */}
            <Col md={6} className="mb-4">
              <Card className="shadow">
                <Card.Img
                  variant="top"
                  src={vehicle.image || 'https://via.placeholder.com/600x400'}
                  alt={vehicle.name}
                  className="img-fluid rounded"
                />
              </Card>
            </Col>

            {/* Vehicle Details */}
            <Col md={6}>
              <h2 className="fw-bold">{vehicle.name}</h2>
              <h4 className="text-muted">Price: ${vehicle.price.toLocaleString()}</h4>
              <p className="mt-3">{vehicle.description}</p>
              <ul className="list-unstyled">
                <li>
                  <strong>Make:</strong> {vehicle.make}
                </li>
                <li>
                  <strong>Model:</strong> {vehicle.model}
                </li>
                <li>
                  <strong>Year:</strong> {vehicle.year}
                </li>
                <li>
                  <strong>Availability:</strong>{' '}
                  <span
                    className={`fw-bold ${
                      vehicle.availability ? 'text-success' : 'text-danger'
                    }`}
                  >
                    {vehicle.availability ? 'Available' : 'Out of Stock'}
                  </span>
                </li>
              </ul>
              <Button variant="primary" className="mt-3">
                Contact Us for More Details
              </Button>
            </Col>
          </Row>
        ) : (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3">Loading vehicle details...</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default VehicleDetailsPage;
