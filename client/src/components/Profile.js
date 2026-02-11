import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="portal-wrapper">
      {/* Top Level Header */}
      <header className="portal-top-bar">
        <div className="welcome-text">
          <h1>Employee Portal</h1>
          <p>Welcome, Nithini Jayathilaka</p>
        </div>
        <button className="logout-button">
          <span className="logout-icon">⮞</span> Logout
        </button>
      </header>

      {/* Main Navigation Row */}
      <nav className="portal-nav-row">
        <div className="nav-btn"><span>🕒</span> Attendance</div>
        <div className="nav-btn"><span>📋</span> Leave</div>
        <div className="nav-btn"><span>📊</span> Projects</div>
        <div className="nav-btn"><span>🔔</span> Announcements</div>
        <div className="nav-btn active-nav"><span>👤</span> Profile</div>
      </nav>

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