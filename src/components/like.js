// Dependencies
import React, { useState } from "react";
import PropTypes from "prop-types";

// icons
import IconLike from "../components/icons/iconLike";

const Like = ({ likesCount, liked }) => {
  const [like, setLike] = useState(liked);

  return (
    <div className="like">
      <div
        className={`like__icon ${like ? "like__icon_liked" : ""}`}
        onClick={() => setLike(!like)}
      >
        <IconLike />
      </div>
      <p className="like__counter">{likesCount}</p>
    </div>
  );
};

export default Like;

Like.propTypes = {
  likesCount: PropTypes.number,
  liked: PropTypes.bool
};
