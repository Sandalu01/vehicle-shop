import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AboutPage from "./Components/AboutPage";
import SignUpForm from "./Components/SignUpPage";
import LoginForm from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import NaviBar from "./Components/NaviBar";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NaviBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Signup" element={<SignUpForm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
