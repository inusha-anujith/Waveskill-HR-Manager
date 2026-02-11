import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Attendance from './components/Attendance';
import Leave from './components/Leave'; // 1. Import your new Leave component

function App() {
  return (
    <div className="App">
      {/* 2. Switch to <Leave /> to see your latest work */}
      
      {/* <Login /> */}
      {/* <Profile /> */}
      {/* <Attendance /> */}
      <Leave />
      
    </div>
  );
}

export default App;