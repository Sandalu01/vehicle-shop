import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import AboutPage from './Pages/AboutPage'
import VehiclePage from './Pages/VehiclePage';
import VehicleDetailsPage from './Components/VehicleDetail';
import ContactPage from './Pages/ContactPage';
import Header from './Components/Header';
import Footer from './Components/Footer'

import PopularCars from './Cartypes/PopularCars';
import BestCars from './Cartypes/BestCars';
import CarModels from './Cartypes/CarModels';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import EmailVerificationPage from './Pages/EmailVerificationPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';

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
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/best" element={<BestCars />} />
          <Route path="/populer" element={<PopularCars />} />
          <Route path="/model" element={<CarModels/>} />
          <Route path="/loginpage" element={<LoginPage/>} />
          <Route path="/verify-email" element={<EmailVerificationPage/>} />
          <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
          <Route path="/reset-password/:token" element={<ResetPasswordPage/>} />
        </Routes>
      </main>
      
      <Footer />
    </Router>
  );
};

export default App;
