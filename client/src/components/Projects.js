import React from 'react';
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
        <div className="nav-item"><span>🕒</span> Attendance</div>
        <div className="nav-item"><span>📋</span> Leave</div>
        <div className="nav-item active"><span>📊</span> Projects</div>
        <div className="nav-item"><span>🔔</span> Announcements</div>
        <div className="nav-item"><span>👤</span> Profile</div>
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