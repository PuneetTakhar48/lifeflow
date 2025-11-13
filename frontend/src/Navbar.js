import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isAuthenticated, onLogout }) {
  return (
    <nav style={{ 
      padding: '15px 30px', 
      backgroundColor: '#2c3e50', 
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link to="/" style={{ 
        color: 'white', 
        textDecoration: 'none', 
        fontSize: '24px', 
        fontWeight: 'bold' 
      }}>
        LifeFlow+
      </Link>
      
      <div>
        {isAuthenticated ? (
          <button
            onClick={onLogout}
            style={{
              padding: '8px 16px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        ) : (
          <div>
            <Link to="/login" style={{ 
              color: 'white', 
              textDecoration: 'none', 
              marginRight: '20px' 
            }}>
              Login
            </Link>
            <Link to="/signup" style={{ 
              color: 'white', 
              textDecoration: 'none' 
            }}>
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;