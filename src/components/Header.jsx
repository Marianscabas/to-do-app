import React from "react";
import "./css/Header.css"
const Header = ({ children }) => {
  return (
    <header>
      <img
        src="https://gracious-joliot-9a183c.netlify.app/img/bg-desktop-light.jpg"
        alt="montañas"
      />
      {children}
    </header>
  );
};

export default Header;
