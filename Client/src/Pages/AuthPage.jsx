import React from 'react';
import { Container, Row, Col, Form, Button, Tabs, Tab } from 'react-bootstrap';

const AuthPage = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">Welcome</h1>
        <p className="lead mt-3">
          Login or sign up to access exclusive features.
        </p>
      </div>

      {/* Tabs for Login and Signup */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Tabs
              defaultActiveKey="login"
              id="auth-tabs"
              className="mb-4 justify-content-center"
            >
              {/* Login Tab */}
              <Tab eventKey="login" title="Login">
                <h2 className="text-center mb-4">Login to Your Account</h2>
                <Form>
                  {/* Email Input */}
                  <Form.Group controlId="loginEmail" className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  {/* Password Input */}
                  <Form.Group controlId="loginPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </Form.Group>

                  {/* Login Button */}
                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
              </Tab>

              {/* Signup Tab */}
              <Tab eventKey="signup" title="Sign Up">
                <h2 className="text-center mb-4">Create an Account</h2>
                <Form>
                  {/* Full Name Input */}
                  <Form.Group controlId="signupName" className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </Form.Group>

                  {/* Email Input */}
                  <Form.Group controlId="signupEmail" className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  {/* Password Input */}
                  <Form.Group controlId="signupPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </Form.Group>

                  {/* Confirm Password Input */}
                  <Form.Group controlId="signupConfirmPassword" className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-enter your password"
                      required
                    />
                  </Form.Group>

                  {/* Signup Button */}
                  <div className="text-center">
                    <Button variant="success" type="submit">
                      Sign Up
                    </Button>
                  </div>
                </Form>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>

      {/* Additional Info Section */}
      <div className="bg-secondary text-white py-4">
        <Container>
          <Row>
            <Col className="text-center">
              <p>
                Need help? <a href="/support" className="text-white fw-bold">Contact Support</a>.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AuthPage;
