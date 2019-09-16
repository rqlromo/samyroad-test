// Dependencies
import React from "react";
import PropTypes from "prop-types";

// Components
import Card from "./card";


const cardList = ({filteredData}) => {
  return (
    <main className="cardList">
      {filteredData.length > 0 &&
        filteredData.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
    </main>
  );
};

cardList.propTypes = {
  filteredData: PropTypes.array
};

export default cardList;
