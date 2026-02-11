import React from 'react';
import './Announcements.css';

const Announcements = () => {
  return (
    <div className="portal-container">
      {/* Top Navbar */}
      <header className="portal-header">
        <div className="header-info">
          <h1>Employee Portal</h1>
          <p>Welcome, Nithini Jayathilaka</p>
        </div>
        <button className="logout-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
      </header>

      {/* Main Navigation Row */}
      <nav className="main-nav">
        <div className="nav-item"><span>🕒</span> Attendance</div>
        <div className="nav-item"><span>📋</span> Leave</div>
        <div className="nav-item active"><span>📊</span> Projects</div>
        <div className="nav-item"><span>🔔</span> Announcements</div>
        <div className="nav-item"><span>👤</span> Profile</div>
      </nav>

      {/* Announcements Content Box */}
      <div className="announcements-outer-card">
        <div className="announcement-intro">
          <h3>Announcements</h3>
          <p>Important updates and notifications</p>
        </div>

        {/* Urgent Card */}
        <div className="notification-card urgent-style">
          <div className="notif-header">
            <span className="notif-icon">ⓘ</span>
            <h4>Holiday Notice - January 26</h4>
          </div>
          <div className="badge red-badge">Urgent</div>
          <p className="notif-body">Please note that January 26 is a public holiday. The office will be closed.</p>
          <div className="notif-footer">
            <span>Posted by Admin User</span>
            <span>January 7, 2026</span>
          </div>
        </div>

        {/* Important Card */}
        <div className="notification-card important-style">
          <div className="notif-header">
            <span className="notif-icon">ⓘ</span>
            <h4>Welcome to HR Management System</h4>
          </div>
          <div className="badge black-badge">Important</div>
          <p className="notif-body">We are pleased to introduce our new HR management platform. Please explore all the features available to you.</p>
          <div className="notif-footer">
            <span>Posted by Admin User</span>
            <span>January 1, 2026</span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Statistics */}
      <div className="notif-stats-row">
        <div className="stat-item">
          <label>Total Announcements</label>
          <div className="stat-count">3</div>
        </div>
        <div className="stat-item">
          <label>Urgent</label>
          <div className="stat-count red-txt">1</div>
        </div>
        <div className="stat-item">
          <label>Important</label>
          <div className="stat-count blue-txt">1</div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;