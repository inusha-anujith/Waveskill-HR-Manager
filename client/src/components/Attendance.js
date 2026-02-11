import React from 'react';
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
        <button className="logout-button">
          <span className="icon">⮞</span> Logout
        </button>
      </header>

      {/* Main Navigation */}
      <nav className="portal-nav">
        <div className="nav-item active"><span>🕒</span> Attendance</div>
        <div className="nav-item"><span>📋</span> Leave</div>
        <div className="nav-item"><span>📊</span> Projects</div>
        <div className="nav-item"><span>🔔</span> Announcements</div>
        <div className="nav-item"><span>👤</span> Profile</div>
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