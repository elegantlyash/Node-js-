import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []); // Runs once to load the initial value from localStorage

  useEffect(() => {
    // Sync dark mode state with localStorage
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]); // Runs whenever `darkMode` changes

  return (
    <div style ={{
      backgroundColor: darkMode ? '#333' : '#fff',
      color: darkMode ? '#fff' : '#000'
    }}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default DarkModeToggle;