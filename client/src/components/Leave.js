import React from 'react';
import './Leave.css';

const Leave = () => {
  return (
    <div className="portal-container">
      {/* Top Header */}
      <header className="portal-header">
        <div className="header-left">
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

      {/* Navigation Tabs */}
      <nav className="portal-nav">
        <div className="nav-item"><span>🕒</span> Attendance</div>
        <div className="nav-item active"><span>📋</span> Leave</div>
        <div className="nav-item"><span>📊</span> Projects</div>
        <div className="nav-item"><span>🔔</span> Announcements</div>
        <div className="nav-item"><span>👤</span> Profile</div>
      </nav>

      {/* Leave Management Action Card */}
      <section className="action-card">
        <div className="action-text">
          <h3>Leave Management</h3>
          <p>Check in and check out for today</p>
        </div>
        <button className="apply-leave-btn">
          <span className="btn-icon">📋</span> Apply for Leave
        </button>
      </section>

      {/* Leave Statistics Grid */}
      <section className="stats-grid">
        <div className="stat-card">
          <p>Total Leaves</p>
          <div className="stat-value">3 days</div>
        </div>
        <div className="stat-card">
          <p className="green-label">Approved</p>
          <div className="stat-value green-text">0 days</div>
        </div>
        <div className="stat-card">
          <p className="orange-label">Pending</p>
          <div className="stat-value orange-text">3 days</div>
        </div>
        <div className="stat-card">
          <p className="red-label">Rejected</p>
          <div className="stat-value red-text">0</div>
        </div>
      </section>

      {/* Leave History Section */}
      <section className="history-card">
        <h3>Leave History</h3>
        <p className="subtitle">Your leave requests and their status</p>
        
        <div className="table-wrapper">
          <table className="leave-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Duration</th>
                <th>Days</th>
                <th>Applied</th>
                <th>Status</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="type-badge sick">Sick</span></td>
                <td className="duration-cell">
                  <span className="calendar-icon">📅</span> 1/10/2026 - 1/12/2026
                </td>
                <td>3 days</td>
                <td className="applied-cell"><span>🕒</span></td>
                <td><span className="status-badge pending">Pending</span></td>
                <td className="reason-cell">Medical appointment and recovery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Leave;