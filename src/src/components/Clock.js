import React, { useState, useEffect } from 'react';

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

  const partOfDay = getPartOfDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[time.getDay()];

  // Format time without seconds
  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div style={{
      fontSize: '8rem',
      textAlign: 'center',
      marginTop: '2rem',
      fontFamily: 'Arial, sans-serif',
      fontWeight: 'bold',
      color: '#f0f0f0',
      backgroundColor: '#121212',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <div style={{ fontSize: '6rem' }}>{dayName}</div>
      <div>{formattedTime}</div>
      <div style={{ fontSize: '4rem' }}>{time.toLocaleDateString()}</div>
      <div style={{ fontSize: '6rem' }}>{partOfDay.emoji} {partOfDay.text}</div>
    </div>
  );
};

export default Clock;