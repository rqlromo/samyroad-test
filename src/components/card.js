// Dependencies
import React from "react";
import PropTypes from "prop-types";

import imagen from "../images/recurso4.png";

// Components
import Like from "../components/like";

const Card = ({ item }) => {
  const { author, title, main_attachment, liked, likes_count } = item;

  return (
    <div className="card">
      <div className="card__content">
        <img className="card__image" src={imagen} alt="product" />
      </div>
      <div className="card__footer">
        <p className="card__title">{title}</p>
        <p className="card__subtitle">
          <span className="card__subtitle_light">by </span>
          {author}
        </p>
      </div>
      <Like liked={liked} likesCount={likes_count} />
    </div>
  );
};

export default Card;

Card.propTypes = {
  item: PropTypes.object
};
