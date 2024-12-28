import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PopularCars from '../Cartypes/PopularCars';
import BestCars from '../Cartypes/BestCars';
import CarModels from '../Cartypes/CarModels';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <div className="text-center bg-primary text-white py-5">
        <Container>
          <h1 className="display-4 fw-bold">Find your Vehicle prices In sri lanaka</h1>
          <p className="lead mt-3">
            Discover a wide range of vehicles at the best prices. Find your dream car today!
          </p>
          <Link to="/vehicles">
            <Button variant="light" className="mt-3 px-4 py-2">
              Browse Vehicles
            </Button>
          </Link>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row className="text-center">
          <Col md={4}>
            <i className="bi bi-car-front display-4 text-primary"></i>
            <h5 className="mt-3">Wide Selection</h5>
            <p>Choose from a variety of vehicles to suit your needs and budget.</p>
          </Col>
          <Col md={4}>
            <i className="bi bi-currency-dollar display-4 text-primary"></i>
            <h5 className="mt-3">Affordable Prices</h5>
            <p>Get the best deals on high-quality vehicles.</p>
          </Col>
          <Col md={4}>
            <i className="bi bi-star-fill display-4 text-primary"></i>
            <h5 className="mt-3">Trusted Service</h5>
            <p>We prioritize customer satisfaction with our trusted service.</p>
          </Col>
        </Row>
      </Container>
      <div className="vehicle-section bg-light py-5">
      <Container>
        {/* Popular Cars Section */}
        <PopularCars />

        {/* Best Cars Section */}
        <BestCars />

        {/* Car Models Section */}
        <CarModels />
      </Container>
    </div>

      {/* Call-to-Action Section */}
      <div className="bg-secondary text-white text-center py-5">
        <h2>Find Your Dream Vehicle Today</h2>
        <p className="mt-3">Browse our inventory to find the perfect vehicle for you.</p>
        <Link to="/vehicles">
          <Button variant="primary" className="mt-3 px-4 py-2">
            Explore Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;