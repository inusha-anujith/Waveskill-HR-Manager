import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Attendance from './components/Attendance';
import Leave from './components/Leave';
import Announcements from './components/Announcements'; // 1. Import your new Leave component

function App() {
  return (
    <div className="App">
      {/* 2. Switch to <Leave /> to see your latest work */}
      
      {/* <Login /> */}
      {/* <Profile /> */}
      {/* <Attendance /> */}
      {/* <Leave /> */}

      <Announcements />
      
    </div>
  );
}

export default App;