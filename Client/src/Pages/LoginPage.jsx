import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4 fw-bold">Login</h1>
        <p className="lead mt-3">Access your account and manage your preferences.</p>
      </div>

      {/* Login Form Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Welcome Back</h2>
            <Form>
              {/* Email Input */}
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              {/* Password Input */}
              <Form.Group controlId="formPassword" className="mb-3">
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
          </Col>
        </Row>
      </Container>

      {/* Additional Info Section */}
      <div className="bg-secondary text-white py-4">
        <Container>
          <Row>
            <Col className="text-center">
            <p>
  Don't have an account?{' '}
  <Link to="/AuthPage" className="text-white fw-bold">
    Sign up here
  </Link>.
</p>
<p>
  Forgot your password?{' '}
  <Link to="/forgot-password" className="text-white fw-bold">
    Reset it
  </Link>.
</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LoginPage;
