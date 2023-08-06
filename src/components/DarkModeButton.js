import React, { useState } from 'react';

function DarkModeButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
      <button onClick={toggleDarkMode} >
        {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
      </button>
    );
  }
  
  export default DarkModeButton;
  