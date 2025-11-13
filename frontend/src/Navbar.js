import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated, onLogout }) {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          const userData = JSON.parse(localStorage.getItem('userData') || '{}');
          setUser({ name: userData.name || 'User', ...payload });
        } catch (error) {
          console.error('Invalid token');
        }
      }
    }
  }, [isAuthenticated]);

  return (
    <nav style={{ 
      padding: '20px 40px', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <Link to="/" style={{ 
        color: 'white', 
        textDecoration: 'none', 
        fontSize: '32px', 
        fontWeight: '700',
        fontFamily: 'Poppins, sans-serif',
        letterSpacing: '-0.5px',
        textShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        LifeFlow+
      </Link>
      
      <div style={{ position: 'relative' }}>
        {isAuthenticated ? (
          <div>
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: '25px',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px',
                fontSize: '18px',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <span style={{ marginRight: '8px', fontWeight: '500', fontSize: '15px' }}>Welcome, {user?.name || 'User'}</span>
              <span style={{ fontSize: '12px' }}>▼</span>
            </div>
            
            {showDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: '0',
                marginTop: '8px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                minWidth: '200px',
                zIndex: 1000
              }}>
                <div style={{
                  padding: '12px 16px',
                  borderBottom: '1px solid #eee',
                  color: '#2c3e50'
                }}>
                  <div style={{ fontWeight: 'bold' }}>{user?.name || 'User'}</div>
                  <div style={{ fontSize: '14px', color: '#7f8c8d' }}>Logged in</div>
                </div>
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    onLogout();
                  }}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: '#e74c3c',
                    fontSize: '14px',
                    borderRadius: '0 0 8px 8px'
                  }}
                >
                  🚪 Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/login" style={{ 
              color: 'white', 
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.3)',
              transition: 'all 0.3s'
            }}>
              Sign In
            </Link>
            <Link to="/signup" style={{ 
              color: '#2c3e50',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              backgroundColor: 'white',
              fontWeight: '500',
              transition: 'all 0.3s'
            }}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;