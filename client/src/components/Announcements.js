import React from 'react';
import { Link } from 'react-router-dom'; // Add this line
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
      <nav className="portal-nav">
  <Link to="/attendance" className="nav-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Attendance
  </Link>
  
  <Link to="/leave" className="nav-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    Leave
  </Link>
  
  <Link to="/projects" className="nav-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
    Projects
  </Link>
  
  <Link to="/announcements" className="nav-item active">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    Announcements
  </Link>
  
  <Link to="/profile" className="nav-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    Profile
  </Link>
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