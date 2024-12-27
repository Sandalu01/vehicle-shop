import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Column 1: Contact Information */}
          <Col md={6} className="mb-3">
            <h5 className="text-uppercase fw-bold">Contact Us</h5>
            <p>Phone: +94 (76) 1136-338</p>
            <p>Email: Sandalu@AutoVista.com</p>
            <p>Address: Thalawa, Anuradhapuara, Sri Lanaka</p>
          </Col>

          {/* Column 2: Social Media */}
          <Col md={6} className="mb-3 text-md-end text-center">
            <h5 className="text-uppercase fw-bold">Follow Us</h5>
            <Nav className="justify-content-md-end justify-content-center">
              <Nav.Link href="#" className="text-white me-3">
                <FaFacebook size={24} />
              </Nav.Link>
              <Nav.Link href="#" className="text-white me-3">
                <FaTwitter size={24} />
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
                <FaInstagram size={24} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        {/* Bottom Text */}
        <div className="text-center">
          © {new Date().getFullYear()} | AutoVista. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;