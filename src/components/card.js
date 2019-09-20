// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Like from "../components/like";

// Images
import image1 from "../images/recurso1.png";
import image2 from "../images/recurso2.png";
import image3 from "../images/recurso3.png";
import image4 from "../images/recurso4.png";
import image5 from "../images/recurso5.png";
import image6 from "../images/recurso6.png";
import image7 from "../images/recurso7.png";
import image8 from "../images/recurso8.png";
import image9 from "../images/recurso9.png";
import image10 from "../images/recurso10.png";

const Card = ({ item, image }) => {
  const { author, title, liked, likes_count } = item;

  return (
    <div className="card">
      <div className="card__content">
        <img
          className="card__image"
          src={
            image === "image1"
              ? image1
              : image === "image2"
              ? image2
              : image === "image3"
              ? image3
              : image === "image4"
              ? image4
              : image === "image5"
              ? image5
              : image === "image6"
              ? image6
              : image === "image7"
              ? image7
              : image === "image8"
              ? image8
              : image === "image9"
              ? image9
              : image === "image10"
              ? image10
              : ""
          }
          alt="product"
        />
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
