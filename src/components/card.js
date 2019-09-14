// Dependencies
import React from "react";

// Components
import Like from "../components/like";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <img
            className="card__image"
            src="https://samyroad.com/wp-content/uploads/casestudy_bbva_featured-1024x1024.jpg"
            alt="product"
          />
        </div>
        <div className="card__footer">
          <p className="card__title">COLLECTION</p>
          <p className="card__subtitle">
            <span className="card__subtitle_light">by </span>underground
          </p>
        </div>
        <Like />
      </div>
    );
  }
}

export default Card;
