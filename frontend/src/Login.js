import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(process.env.REACT_APP_API_URL || 'http://localhost:5001/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userData', JSON.stringify({ name: formData.email.split('@')[0] }));
      setMessage('Login Successful ✅');
      setTimeout(() => {
        onLogin();
      }, 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed');
    }
    setLoading(false);
  };

  return (
    <div style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '48px',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.2)',
        width: '100%',
        maxWidth: '420px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>🔑</div>
          <h2 style={{ color: '#2c3e50', marginBottom: '12px', fontSize: '32px', fontFamily: 'Poppins, sans-serif', fontWeight: '700' }}>Welcome Back</h2>
          <p style={{ color: '#7f8c8d', fontSize: '16px' }}>Sign in to your LifeFlow+ account</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e1e8ed',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e1e8ed',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: loading ? '#95a5a6' : '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s'
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        {message && (
          <div style={{ 
            marginTop: '20px',
            padding: '10px',
            borderRadius: '6px',
            textAlign: 'center',
            backgroundColor: message.includes('✅') ? '#d4edda' : '#f8d7da',
            color: message.includes('✅') ? '#155724' : '#721c24',
            border: `1px solid ${message.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`
          }}>
            {message}
          </div>
        )}
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <span style={{ color: '#7f8c8d' }}>Don't have an account? </span>
          <Link to="/signup" style={{ color: '#3498db', textDecoration: 'none' }}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;