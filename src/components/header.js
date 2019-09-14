// Dependencies
import React from "react";

// Components
import Search from "../components/search";

// images
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="company-logo" />
      </div>
      <Search withIcon={true} />
    </div>
  );
};

export default Header;
