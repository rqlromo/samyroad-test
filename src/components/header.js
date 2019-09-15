// Dependencies
import React from "react";

// Components
import Search from "../components/search";

// images
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="company-logo" />
      <Search withIcon={true} />
    </header>
  );
};

export default Header;
