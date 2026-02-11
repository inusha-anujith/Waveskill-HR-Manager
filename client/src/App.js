import React from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import Attendance from './components/Attendance'; // 1. Import the new Attendance component

function App() {
  return (
    <div className="App">
      {/* 2. Switch to Attendance to see the design live */}
      
      {/* <Login /> */}
      {/* <Profile /> */}
      <Attendance />
      
    </div>
  );
}

export default App;