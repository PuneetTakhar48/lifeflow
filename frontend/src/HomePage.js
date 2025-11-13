import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ 
      minHeight: '90vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '600px', padding: '40px' }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>🌟</div>
        <h1 style={{ 
          fontSize: '56px', 
          marginBottom: '24px',
          fontWeight: '700',
          fontFamily: 'Poppins, sans-serif',
          letterSpacing: '-1px',
          textShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}>
          Welcome to LifeFlow+
        </h1>
        <p style={{ 
          fontSize: '22px', 
          marginBottom: '48px',
          opacity: 0.95,
          lineHeight: '1.7',
          fontWeight: '400',
          maxWidth: '500px',
          margin: '0 auto 48px'
        }}>
          Your personal life management platform. Organize, track, and achieve your goals with our intuitive dashboard.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Link to="/signup" style={{
            padding: '18px 36px',
            background: 'rgba(255,255,255,0.95)',
            color: '#667eea',
            textDecoration: 'none',
            borderRadius: '30px',
            fontWeight: '600',
            fontSize: '17px',
            transition: 'all 0.3s ease',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(10px)'
          }}>
            Get Started
          </Link>
          <Link to="/login" style={{
            padding: '18px 36px',
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '30px',
            border: '2px solid rgba(255,255,255,0.3)',
            fontWeight: '600',
            fontSize: '17px',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;