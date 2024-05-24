import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Container className="about-page mt-4">
      <h1 className="text-center">About Us</h1>
      <p className="text-center">Learn more about our company.</p>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                Our mission is to provide the best vehicles at the most
                affordable prices. We aim to deliver exceptional service and
                ensure customer satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                Our vision is to be the leading vehicle retailer, recognized for
                our outstanding service and high-quality vehicles. We strive to
                innovate and adapt to the evolving market.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Values</Card.Title>
              <Card.Text>
                We value integrity, customer satisfaction, and continuous
                improvement. Our team is dedicated to upholding these values in
                all our interactions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Team</Card.Title>
              <Card.Text>
                Our team consists of experienced professionals who are
                passionate about vehicles and committed to providing excellent
                service. We work together to achieve our goals.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
