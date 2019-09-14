// Dependencies
import React from "react";

// icons
import IconSearch from "../components/icons/iconSearch";

const Search = ({ withIcon }) => {
  return (
    <form className="searchForm">
      <div className="searchForm__content">
        {withIcon && (
          <div className="searchForm__icon">
            <IconSearch width="16" height="16" />
          </div>
        )}
        <input
          className="searchForm__input"
          type="text"
          placeholder="You're looking for something?"
        />
      </div>
    </form>
  );
};

export default Search;
