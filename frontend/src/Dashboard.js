import React, { useState, useEffect } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Decode JWT token to get user info (basic implementation)
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUser({ id: payload.userId });
      } catch (error) {
        console.error('Invalid token');
      }
    }
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        padding: '60px 20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        marginBottom: '40px'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          color: '#2c3e50', 
          marginBottom: '20px' 
        }}>
          Welcome to LifeFlow+
        </h1>
        <p style={{ 
          fontSize: '20px', 
          color: '#7f8c8d', 
          marginBottom: '30px' 
        }}>
          Your personal life management dashboard
        </p>
        <div style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#27ae60',
          color: 'white',
          borderRadius: '25px',
          fontSize: '16px'
        }}>
          ✅ Successfully Logged In
        </div>
      </div>

      {/* Dashboard Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        marginBottom: '40px'
      }}>
        <div style={{
          padding: '30px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>📊</div>
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Analytics</h3>
          <p style={{ color: '#7f8c8d' }}>Track your daily activities and progress</p>
        </div>

        <div style={{
          padding: '30px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>📅</div>
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Calendar</h3>
          <p style={{ color: '#7f8c8d' }}>Manage your schedule and appointments</p>
        </div>

        <div style={{
          padding: '30px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎯</div>
          <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Goals</h3>
          <p style={{ color: '#7f8c8d' }}>Set and achieve your life goals</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Quick Stats</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3498db' }}>7</div>
            <div style={{ color: '#7f8c8d' }}>Days Active</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#e74c3c' }}>12</div>
            <div style={{ color: '#7f8c8d' }}>Tasks Completed</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f39c12' }}>3</div>
            <div style={{ color: '#7f8c8d' }}>Goals Achieved</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#27ae60' }}>85%</div>
            <div style={{ color: '#7f8c8d' }}>Progress Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;