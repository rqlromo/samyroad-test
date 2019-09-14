// Dependencies
import React from "react";

// icons
import IconLike from "../components/icons/iconLike";

class Card extends React.Component {
  render() {
    return (
      <div className="like">
        <div className="like__icon">
          <IconLike />
        </div>
        <p className="like__counter">2</p>
      </div>
    );
  }
}

export default Card;
