import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import HomePage from './HomePage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div style={{ fontFamily: 'Inter, sans-serif', minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        
        <Routes>
          <Route 
            path="/" 
            element={isAuthenticated ? <Dashboard /> : <HomePage />} 
          />
          <Route 
            path="/login" 
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/signup" 
            element={!isAuthenticated ? <Signup /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;