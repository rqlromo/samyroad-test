// Dependencies
import React from "react";
import PropTypes from "prop-types";

// icons
import IconLike from "../components/icons/iconLike";

const Card = ({ likesCount }) => (
  <div className="like">
    <div className="like__icon">
      <IconLike />
    </div>
    <p className="like__counter">{likesCount}</p>
  </div>
);

export default Card;

Card.propTypes = {
  item: PropTypes.number
};
