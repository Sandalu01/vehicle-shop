import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date.js";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="d-flex justify-content-center mt-5"
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card
              className="bg-dark text-white border-0 shadow-lg rounded-xl"
              style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            >
              <Card.Body>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-4 bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text"
                >
                  Dashboard
                </motion.h2>

                {/* Profile Information Section */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="font-semibold text-green-400 mb-3">Profile Information</h3>
                  <p className="text-muted">Name: {user.name}</p>
                  <p className="text-muted">Email: {user.email}</p>
                </motion.div>

                {/* Account Activity Section */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-semibold text-green-400 mb-3">Account Activity</h3>
                  <p className="text-muted">
                    <span className="font-weight-bold">Joined: </span>
                    {new Date(user.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-muted">
                    <span className="font-weight-bold">Last Login: </span>
                    {formatDate(user.lastLogin)}
                  </p>
                </motion.div>

                {/* Logout Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-4"
                >
                  <Button
                    variant="success"
                    className="w-100 py-3"
                    onClick={handleLogout}
                    size="lg"
                  >
                    Logout
                  </Button>
                </motion.div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default DashboardPage;
