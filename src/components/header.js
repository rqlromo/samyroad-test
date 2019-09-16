// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Search from "../components/search";

// images
import logo from "../images/logo.svg";

const Header = ({onChangeAction}) => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="company-logo" />
      <Search withIcon={true} onChangeAction={(e) => onChangeAction(e)} />
    </header>
  );
};

export default Header;

Header.propTypes = {
  onChangeAction: PropTypes.func
};
