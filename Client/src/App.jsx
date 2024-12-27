import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import AboutPage from './Pages/AboutPage'
import VehiclePage from './Pages/VehiclePage';
import VehicleDetailsPage from './Components/VehicleDetail';
import ContactPage from './Pages/ContactPage';
import Header from './Components/Header';
import Footer from './Components/Footer'
import LoginPage from './Pages/LoginPage';
import AuthPage from './Pages/AuthPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/vehicles" element={<VehiclePage />} />
          <Route path="/vehicles/:id" element={<VehicleDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<AuthPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
