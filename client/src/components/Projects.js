import React from 'react';
import { Link } from 'react-router-dom'; // Add this line
import './Projects.css';

const Projects = () => {
  return (
    <div className="portal-container">
      {/* Top Header */}
      <header className="portal-header">
        <div className="header-left">
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

      {/* Navigation Row */}
      <nav className="portal-nav">
  <Link to="/attendance" className="nav-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Attendance
  </Link>
  
  <Link to="/leave" className="nav-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
    Leave
  </Link>
  
  <Link to="/projects" className="nav-item active">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
    Projects
  </Link>
  
  <Link to="/announcements" className="nav-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    Announcements
  </Link>
  
  <Link to="/profile" className="nav-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    Profile
  </Link>
</nav>

      {/* Projects Main Section */}
      <section className="projects-section">
        <div className="section-intro">
          <h3>My Projects</h3>
          <p>Projects you are assigned to</p>
        </div>

        <div className="project-display-card">
          <div className="project-info-top">
            <h2>HR Management System</h2>
            <div className="project-tags">
              <span className="p-tag black-tag">Active</span>
              <span className="p-tag pink-tag">high priority</span>
            </div>
            
            <div className="progress-container">
              <p>Progress</p>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill"></div>
              </div>
            </div>

            <div className="calendar-trigger">
              <span>📅</span>
            </div>
          </div>

          <div className="project-footer">
            <div className="member-avatar">J</div>
            <span className="member-name">John Doe</span>
          </div>
        </div>
      </section>

      {/* Projects Statistics Grid */}
      <section className="stats-grid">
        <div className="stat-card">
          <p>Total Projects</p>
          <div className="stat-value">3</div>
        </div>
        <div className="stat-card">
          <p className="orange-label">Active Projects</p>
          <div className="stat-value orange-text">1</div>
        </div>
        <div className="stat-card">
          <p className="green-label">Completed Projects</p>
          <div className="stat-value green-text">0</div>
        </div>
      </section>
    </div>
  );
};

export default Projects;