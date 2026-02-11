import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Hook imported
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // 2. Initialize navigate function

  // 3. Create the handler to go to the portal
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from refreshing on form submit
    navigate('/attendance'); // Sends you to the Attendance page
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="icon-container">
          <div className="blue-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
            </svg>
          </div>
        </div>
        
        <h1>HR Management System</h1>
        <p className="subtitle">Sign in to access your account</p>

        {/* 4. Added onSubmit to the form */}
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <div className="input-wrapper">
              <span className="input-icon">✉️</span>
              <input type="email" placeholder="email@company.com" required />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <span className="input-icon">🔒</span>
              <input type="password" placeholder="Enter your password" required />
            </div>
          </div>

          <button type="submit" className="signin-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;