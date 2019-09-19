// Dependencies
import React from "react";
import PropTypes from "prop-types";

// icons
import IconSearch from "../components/icons/iconSearch";

const Search = ({ withIcon, onChangeAction }) => {
  return (
    <form className="searchForm">
      <div className="searchForm__content">
        {withIcon && (
          <div className="searchForm__icon">
            <IconSearch width="17" height="19" />
          </div>
        )}
        <input
          className="searchForm__input"
          type="text"
          placeholder="You're looking for something?"
          onChange={(e) => onChangeAction(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;

Search.propTypes = {
  withIcon: PropTypes.bool,
  onChangeAction: PropTypes.func
};
