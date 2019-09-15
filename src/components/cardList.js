// Dependencies
import React from "react";

// Components
import Card from "./card";

// Helpers
import { fake_api } from "../helpers/api";

class cardList extends React.Component {
  render() {
    return (
      <main className="cardList">
        {fake_api.data.length > 0 &&
          fake_api.data.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
      </main>
    );
  }
}

export default cardList;
