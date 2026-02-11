import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Attendance from './components/Attendance';
import Leave from './components/Leave';
import Announcements from './components/Announcements';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Set the Login page as the starting point */}
          // Change this line in your App.js Routes:
<Route path="/" element={<Attendance />} />
          
          {/* Define paths for all your completed components */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/projects" element={<Projects />} />
          
          {/* Redirect any unknown path back to Login */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;