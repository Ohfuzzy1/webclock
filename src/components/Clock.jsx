import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getPartOfDay = () => {
    const hours = time.getHours();
    if (hours < 4) return { text: 'Very Late Night', emoji: '🌌' };
    if (hours < 6) return { text: 'Early Morning', emoji: '🌄' };
    if (hours < 9) return { text: 'Morning', emoji: '🌅' };
    if (hours < 12) return { text: 'Late Morning', emoji: '☀️' };
    if (hours < 14) return { text: 'Noon', emoji: '🌞' };
    if (hours < 17) return { text: 'Afternoon', emoji: '⛅' };
    if (hours < 20) return { text: 'Evening', emoji: '🌆' };
    return { text: 'Night', emoji: '🌃' };
  };

  const formatDate = (date) => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  const partOfDay = getPartOfDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[time.getDay()];
  const ampm = time.getHours() < 12 ? 'AM' : 'PM';

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  //Regular expression to handle AM/PM
  const timeRegex = /(\d{2}):(\d{2})\s*(AM|PM)/i; // Matches two digits, colon, two digits, space, AM or PM (case-insensitive)
  
  let extractedTime = "";
  
  const match = formattedTime.match(timeRegex);
  extractedTime = match[1] + ":" + match[2]; //hh:mm



  
  return (
    <div className="clock-container">
      <span className="time">{extractedTime} </span>
      {/* <span className="time">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span> */}
      
      <span className={`ampm-large ${ampm === 'AM' ? 'am' : 'pm'}`}>{ampm} </span>
      <div className="ampm-small">
        {/* <span className="am">{ampm === 'AM'? 'AM' : ''}</span>
        <span className="pm">{ampm === 'PM'? 'PM' : ''}</span> */}

      </div>
      <span className="date">{formatDate(time)}</span>
      <div className="part-of-day">
        <span className="day-name">{dayName} </span>
        <span className="emoji">{partOfDay.emoji}</span>
        <span className="text">{partOfDay.text}</span>
      </div>
    </div>
  );
};

export default Clock;