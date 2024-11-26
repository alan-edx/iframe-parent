import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import AboutUs from '../pages/aboutUs';
import IFrame from '../pages/iframe';
import Header from './Header'; 
const RoutesComponent: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iframe" element={<IFrame />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
