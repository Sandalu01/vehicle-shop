import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">Contact Us</h1>
        <p className="lead mt-3">We’re here to help! Reach out for any inquiries or support.</p>
      </div>

      {/* Contact Form Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center mb-4">Get in Touch</h2>
            <Form>
              {/* Name Input */}
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              {/* Email Input */}
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              {/* Subject Input */}
              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the subject"
                  required
                />
              </Form.Group>

              {/* Message Textarea */}
              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Type your message here"
                  required
                />
              </Form.Group>

              {/* Submit Button */}
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Contact Info Section */}
      <div className="bg-secondary text-white py-5">
        <Container>
          <Row>
            <Col md={4} className="text-center">
              <h5 className="fw-bold">Email</h5>
              <p>Sandaluo@AutoVista.com</p>
            </Col>
            <Col md={4} className="text-center">
              <h5 className="fw-bold">Phone</h5>
              <p>+94 76 1136338</p>
            </Col>
            <Col md={4} className="text-center">
              <h5 className="fw-bold">Address</h5>
              <p>Thalawa, Anuradhapuara, Sri Lanaka</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContactPage;
