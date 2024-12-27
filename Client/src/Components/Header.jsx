import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Column 1 */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <a href="/" className="text-white text-decoration-none hover-effect">Home</a>
              </li>
              <li>
                <a href="/about" className="text-white text-decoration-none hover-effect">About</a>
              </li>
              <li>
                <a href="/vehicles" className="text-white text-decoration-none hover-effect">Vehicles</a>
              </li>
              <li>
                <a href="/contact" className="text-white text-decoration-none hover-effect">Contact</a>
              </li>
            </ul>
          </Col>

          {/* Column 2 */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Contact Us</h5>
            <p className="mt-3">
              Email: <a href="mailto:info@example.com" className="text-white text-decoration-none">info@example.com</a>
            </p>
            <p>Phone: +1 123 456 7890</p>
            <p>Address: 123 Main Street, Anytown, USA</p>
          </Col>

          {/* Column 3 */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Follow Us</h5>
            <div className="d-flex mt-3">
              <a href="#" className="text-white me-3 hover-effect">
                <i className="bi bi-facebook"></i> Facebook
              </a>
              <a href="#" className="text-white me-3 hover-effect">
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a href="#" className="text-white hover-effect">
                <i className="bi bi-instagram"></i> Instagram
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        <div className="text-center">
          © {new Date().getFullYear()} Vehicle Selling Website. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
