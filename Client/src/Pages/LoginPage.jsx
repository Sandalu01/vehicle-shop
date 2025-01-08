import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { Form, Container, Row, Col } from "react-bootstrap";
import Input from "../Components/Input"; // Assuming you still want to use your custom Input component
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col md={6} className="mx-auto">
            <div className="p-4">
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                Welcome Back
              </h2>

              <Form onSubmit={handleLogin}>
                {/* Email Input */}
                <Form.Group controlId="formEmail" className="mb-3">
                  <Input
                    icon={Mail}
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                {/* Password Input */}
                <Form.Group controlId="formPassword" className="mb-3">
                  <Input
                    icon={Lock}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                {/* Forgot password link */}
                <div className="d-flex justify-content-end mb-4">
                  <Link to="/forgot-password" className="text-sm text-green-400 hover:underline">
                    Forgot password?
                  </Link>
                </div>

                {/* Error message */}
                {error && <p className="text-danger font-semibold mb-2">{error}</p>}

                {/* Login Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-100 py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Login"}
                </motion.button>
              </Form>
            </div>

            {/* Sign Up Link */}
            <div className="px-4 py-3 bg-gray-900 bg-opacity-50 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <Link to="/signup" className="text-green-400 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default LoginPage;
