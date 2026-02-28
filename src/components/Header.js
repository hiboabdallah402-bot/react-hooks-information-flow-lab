import React from "react";

function Header({ isDarkMode = false, onDarkModeClick = () => {} }) {
  return (
    <div className="Header">
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </div>
  );
}

export default Header;
