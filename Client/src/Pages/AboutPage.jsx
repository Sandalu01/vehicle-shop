import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="lead mt-3">
          Committed to helping you find the perfect vehicle, with exceptional service and unbeatable value.
        </p>
      </div>

      {/* About Content Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src="https://via.placeholder.com/500x300"
              alt="About Us"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold">Who We Are</h2>
            <p className="mt-3">
              We are a trusted vehicle-selling platform dedicated to providing customers with a seamless and
              enjoyable experience. Whether you're looking for a car, truck, or SUV, we’ve got you covered.
            </p>
            <p>
              With years of expertise, a wide range of inventory, and unmatched customer service, we aim to make
              your vehicle-buying journey as smooth as possible.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4 fw-bold">Why Choose Us?</h2>
        <Row>
          <Col md={4} className="text-center">
            <Card className="border-0 shadow h-100">
              <Card.Body>
                <i className="bi bi-car-front display-4 text-primary"></i>
                <h5 className="mt-3">Wide Selection</h5>
                <p>Explore a variety of vehicles to suit all budgets and preferences.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card className="border-0 shadow h-100">
              <Card.Body>
                <i className="bi bi-currency-dollar display-4 text-primary"></i>
                <h5 className="mt-3">Affordable Prices</h5>
                <p>Find competitive pricing for high-quality vehicles.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="text-center">
            <Card className="border-0 shadow h-100">
              <Card.Body>
                <i className="bi bi-hand-thumbs-up display-4 text-primary"></i>
                <h5 className="mt-3">Customer Satisfaction</h5>
                <p>We prioritize our customers by providing exceptional support and service.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="bg-secondary text-white text-center py-5">
        <h2>Ready to Find Your Perfect Vehicle?</h2>
        <p className="mt-3">Browse our inventory and drive away in your dream car today!</p>
      </div>
    </div>
  );
};

export default AboutPage;
 