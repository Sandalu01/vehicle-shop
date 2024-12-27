import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Column 1 */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-white text-decoration-none hover-effect">Home</Nav.Link>
              <Nav.Link href="/about" className="text-white text-decoration-none hover-effect">About</Nav.Link>
              <Nav.Link href="/vehicles" className="text-white text-decoration-none hover-effect">Vehicles</Nav.Link>
              <Nav.Link href="/contact" className="text-white text-decoration-none hover-effect">Contact</Nav.Link>
            </Nav>
          </Col>

          {/* Column 2 */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Contact Us</h5>
            <p>Phone: +1 (234) 567-890</p>
            <p>Email: support@vehiclesell.com</p>
            <p>Address: 123 Vehicle St, City, Country</p>
          </Col>

          {/* Column 3 */}
          <Col md={4} className="mb-3">
            <h5 className="text-uppercase fw-bold">Follow Us</h5>
            <Nav>
              <Nav.Link href="#" className="text-white text-decoration-none me-2">Facebook</Nav.Link>
              <Nav.Link href="#" className="text-white text-decoration-none me-2">Twitter</Nav.Link>
              <Nav.Link href="#" className="text-white text-decoration-none me-2">Instagram</Nav.Link>
            </Nav>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        {/* Bottom Text */}
        <div className="text-center">
          © {new Date().getFullYear()} Vehicle Selling App. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
