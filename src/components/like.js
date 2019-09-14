// Dependencies
import React from "react";
import PropTypes from "prop-types";

// icons
import IconLike from "../components/icons/iconLike";

class Card extends React.Component {
  render() {
    const {likesCount} = this.props
    return (
      <div className="like">
        <div className="like__icon">
          <IconLike />
        </div>
        <p className="like__counter">{likesCount}</p>
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  item: PropTypes.number
};