// Dependencies
import React from "react";

// Components
import Search from "../components/search";

// images
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="company-logo" />
      <Search withIcon={true} />
    </div>
  );
};

export default Header;
