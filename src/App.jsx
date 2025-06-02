import './App.css';
import Clock from './components/Clock';
import React, { useState } from 'react';

function App() {
  const [showNotes, setShowNotes] = useState(false);

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  return (
    <div className="App">
      <Clock />
      <span onClick={toggleNotes} style={{ cursor: 'pointer' }}>🔍</span>
      {showNotes && (
        <div className="readme">
          <p>It's a clock for folks who need help with the phases of the day.</p>
          <p>12:56 AM 🌌Late Night Sunday Jun 01, 2025</p>
          <p>Descriptive Emojis & Part of the day</p>
          <ul>
            <li>00:00 - 03:59 Late Night 🌌</li>
            <li>04:00 - 05:59 Early Morning 🌄</li>
            <li>06:00 - 08:59 Morning 🌅</li>
            <li>09:00 - 11:59 Late Morning ☀️</li>
            <li>12:00 - 13:59 Noon 🌞</li>
            <li>14:00 - 16:59 Afternoon ⛅</li>
            <li>17:00 - 19:59 Evening 🌆</li>
            <li>20:00 - 23:59 Night 🌃</li>
          </ul>
          <p>Copyright (c) 2025 Perry Weinthal</p>
        </div>
      )}
    </div>
  );
}

export default App;
