import React, { useState } from 'react';
import './DarkModeToggle.css';

export DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className={`dark-mode-toggle ${darkMode ? 'dark-mode' : 'light-mode'}`}
      onClick={toggleDarkMode}
    >
      {darkMode ? 'Modo Claro' : 'Modo Escuro'}
    </button>
  );
};




