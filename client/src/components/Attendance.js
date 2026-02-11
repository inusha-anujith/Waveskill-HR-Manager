import React from 'react';
import { Link } from 'react-router-dom'; // Add this line
import './Attendance.css';

const Attendance = () => {
  return (
    <div className="attendance-portal">
      {/* Top Header */}
      <header className="portal-header">
        <div className="header-text">
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

      {/* Main Navigation */}
      <nav className="portal-nav">
  <Link to="/attendance" className="nav-item active">
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
  
  <Link to="/profile" className="nav-item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    Profile
  </Link>
</nav>

      {/* Mark Attendance Card */}
      <div className="attendance-main-card">
        <h3>Mark Attendance</h3>
        <p className="description">Check in and check out for today</p>
        
        <div className="mark-box">
          <div className="box-header">
            <div className="date-display">
              <p>Today's Date</p>
              <div className="date-row">
                <span className="calendar-icon">📅</span>
                <strong>Sunday, January 11, 2026</strong>
              </div>
            </div>
            <div className="digital-clock">4.55 AM</div>
          </div>

          <div className="check-row">
            <div className="check-tile">
              <p>Check In</p>
              <div className="check-time">
                <span className="green-clock">🕒</span> 15:19:59
              </div>
            </div>
            <div className="check-tile">
              <p>Check Out</p>
              <div className="check-time">
                <span className="red-clock">🕒</span> Not yet
              </div>
            </div>
          </div>

          <div className="box-footer">
            <div className="footer-left">
              <span className="late-badge">Late</span>
              <span className="ip-address">📍 IP: 192.168.1.79</span>
            </div>
            <button className="check-out-btn">
               <span>🕒</span> Check Out
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="stats-grid">
        <div className="stat-box">
          <p>Total Days</p>
          <div className="stat-val">3</div>
        </div>
        <div className="stat-box">
          <p>Present</p>
          <div className="stat-val green-text">2</div>
        </div>
        <div className="stat-box">
          <p>Late</p>
          <div className="stat-val orange-text">1</div>
        </div>
        <div className="stat-box">
          <p>Absent</p>
          <div className="stat-val red-text">0</div>
        </div>
      </div>

      {/* Attendance History Table */}
      <div className="history-card">
        <h3>Attendance History</h3>
        <p className="description">Your recent attendance records</p>
        
        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Work Hours</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1/8/2026</td>
              <td>09:00:00</td>
              <td>18:00:00</td>
              <td>9h 0m</td>
              <td><span className="status-badge present">Present</span></td>
            </tr>
            <tr>
              <td>2/8/2026</td>
              <td>08:55:00</td>
              <td>17:55:00</td>
              <td>9h 0m</td>
              <td><span className="status-badge present">Present</span></td>
            </tr>
            <tr>
              <td>3/8/2026</td>
              <td>09:35:00</td>
              <td>17:55:00</td>
              <td>8h 25m</td>
              <td><span className="status-badge late">Late</span></td>
            </tr>
            <tr>
              <td>4/8/2026</td>
              <td>09:00:00</td>
              <td>18:00:00</td>
              <td>9h 0m</td>
              <td><span className="status-badge present">Present</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;