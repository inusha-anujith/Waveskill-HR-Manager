import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Attendance from './components/Attendance';
import Leave from './components/Leave';
import Announcements from './components/Announcements';
import Projects from './components/Projects'; // 1. Import your final Projects component

function App() {
  return (
    <div className="App">
      {/* 2. Set Projects as the active component to view it live */}
      
      {/* <Login /> */}
      {/* <Profile /> */}
      {/* <Attendance /> */}
      {/* <Leave /> */}
      {/* <Announcements /> */}
      <Projects />
      
    </div>
  );
}

export default App;