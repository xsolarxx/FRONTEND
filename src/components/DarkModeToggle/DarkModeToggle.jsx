import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css';
import { faMoon as solidMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun as solidSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode');
    setDarkMode(darkModePreference === 'true');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  };

  return (
    <div className="darkModeToggle">
      <FontAwesomeIcon
        onClick={toggleDarkMode}
        icon={darkMode ? solidSun : solidMoon}
        style={{ color: darkMode ? 'white' : '#122e3d' }}
        size="lg"
      />
    </div>
  );
};
