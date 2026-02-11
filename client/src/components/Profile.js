import React from 'react';
import { Link } from 'react-router-dom'; // Add this line
import './Profile.css';

const Profile = () => {
  return (
    <div className="portal-container"> {/* Changed from portal-wrapper */}
      {/* Top Level Header */}
      <header className="portal-header"> {/* Changed from portal-top-bar */}
        <div className="header-text"> {/* Changed from welcome-text */}
          <h1>Employee Portal</h1>
          <p>Welcome, Nithini Jayathilaka</p>
        </div>
        <button className="logout-btn">
          <svg 
            width="18" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
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
  
  <Link to="/announcements" className="nav-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    Announcements
  </Link>
  
  <Link to="/profile" className="nav-item active">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    Profile
  </Link>
</nav>
      
      {/* Rest of your component... */}

      {/* Hero Profile Card */}
      <section className="hero-card">
        <div className="hero-left">
          <div className="hero-avatar">
            J<span className="online-status"></span>
          </div>
          <div className="hero-meta">
            <h2>John Doe</h2>
            <p>Software Engineer</p>
            <div className="hero-tags">
              <span className="status-tag black">Active Employee</span>
              <span className="status-tag light">Engineering</span>
              <span className="status-tag light">EMP-000003</span>
            </div>
          </div>
        </div>
        <button className="edit-profile-btn">✎ Edit Profile</button>
      </section>

      {/* Top Summary Grid */}
      <div className="stats-row">
        <div className="stat-item"><h4>Total Leaves</h4><div className="num">3 days</div></div>
        <div className="stat-item"><h4 className="green-txt">Approved</h4><div className="num green-txt">0 days</div></div>
        <div className="stat-item"><h4 className="orange-txt">Pending</h4><div className="num orange-txt">3 days</div></div>
        <div className="stat-item"><h4 className="red-txt">Rejected</h4><div className="num red-txt">0</div></div>
      </div>

      {/* Inner View Switcher */}
      <div className="view-switcher">
        <div className="switch-tab active-tab">Overview</div>
        <div className="switch-tab">Activity</div>
        <div className="switch-tab">Skills</div>
        <div className="switch-tab">Emergency</div>
      </div>

      {/* Dual Column Info Grid */}
      <div className="info-grid">
        <div className="info-column">
          <h3>👤 Personal Information</h3>
          <div className="data-field">
            <span className="field-icon">✉</span>
            <div><label>Email Address</label><p>john@company.com</p></div>
          </div>
          <div className="data-field">
            <span className="field-icon">📞</span>
            <div><label>Phone Number</label><p>+1234567892</p></div>
          </div>
          <div className="data-field">
            <span className="field-icon">📅</span>
            <div><label>Join Date</label><p>March 1, 2024</p></div>
          </div>
        </div>

        <div className="info-column">
          <h3>💼 Professional Information</h3>
          <div className="data-field">
            <span className="field-icon">🏢</span>
            <div><label>Department</label><p>Engineering</p></div>
          </div>
          <div className="data-field">
            <span className="field-icon">🏅</span>
            <div><label>Position</label><p>Software Engineer</p></div>
          </div>
          <div className="data-field">
            <span className="field-icon">👥</span>
            <div><label>Role</label><p>Employee</p></div>
          </div>
        </div>
      </div>

      {/* Bottom Leave Balance Section */}
      <section className="leave-balance-sec">
        <div className="sec-header">
          <h3>📅 Leave Balance Overview</h3>
          <p>Your annual leave allocation and usage</p>
        </div>
        <div className="balance-main">
          <div className="bal-head">
            <span>Total Annual Leave: <strong>20 days</strong></span>
            <span className="green-txt">20 days</span>
          </div>
          <div className="progress-bar-bg"><div className="progress-fill"></div></div>
          <div className="bal-footer">Leave utilization <span>0 / 20 days</span></div>
        </div>
        <div className="bal-grid">
          <div className="bal-box"><span>Approved</span><div className="bal-num blue-txt">0</div></div>
          <div className="bal-box"><span>Pending</span><div className="bal-num orange-txt">0</div></div>
          <div className="bal-box"><span>Available</span><div className="bal-num green-txt">20</div></div>
          <div className="bal-box"><span>Used Days</span><div className="bal-num red-txt">0</div></div>
        </div>
      </section>
    </div>
  );
};

export default Profile;