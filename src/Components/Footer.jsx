import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We provide the best vehicles at the most affordable prices. Find
              your dream vehicle with us.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/cars" className="text-white">
                  Cars
                </a>
              </li>
              <li>
                <a href="/motorcycles" className="text-white">
                  Motorcycles
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Email: support@vehicleshop.com
              <br />
              Phone: +1 (555) 123-4567
              <br />
              Address: 123 Vehicle Street, Auto City, CA 12345
            </p>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={12} className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Vehicle Shop. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
