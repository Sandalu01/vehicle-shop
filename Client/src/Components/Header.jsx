import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaInfoCircle, FaCar, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-black text-white py-3 apple-font">
      <Container>
        <Row>
          <Col>
            <Navbar expand="lg" className="navbar-dark">
              <Navbar.Brand href="/" className="">
                <span className="me-2"></span> Sheer Driving Pleasure
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarNav" />
              <Navbar.Collapse id="navbarNav">
                <Nav className="ms-auto">
                  <Nav.Link href="/" className="text-white hover-effect d-flex align-items-center">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/about" className="text-white hover-effect d-flex align-items-center">
                    About
                  </Nav.Link>
                  <Nav.Link href="/vehicles" className="text-white hover-effect d-flex align-items-center">
                   Vehicles
                  </Nav.Link>
                  <Nav.Link href="/contact" className="text-white hover-effect d-flex align-items-center">
                      Contact
                  </Nav.Link>
                  <Nav.Link href="/loginpage" className="text-white hover-effect d-flex align-items-center">
                      Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
