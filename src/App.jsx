import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import VendorLogin from './pages/VendorLogin';
import SupplierLogin from './pages/SupplierLogin';
import VendorRegister from './pages/VendorRegister';
import SupplierRegister from './pages/SupplierRegister';
import VendorDashboard from './pages/VendorDashboard';
import SupplierDashboard from './pages/SupplierDashboard';
import ToastProvider from './components/ToastProvider';

function App() {
  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/vendor/login" element={<VendorLogin />} />
          <Route path="/supplier/login" element={<SupplierLogin />} />
          <Route path="/vendor/register" element={<VendorRegister />} />
          <Route path="/supplier/register" element={<SupplierRegister />} />
          <Route path="/vendor/dashboard" element={<VendorDashboard />} />
          <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;
