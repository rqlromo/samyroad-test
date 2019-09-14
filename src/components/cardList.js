// Dependencies
import React from "react";

// Components
import Card from "./card";

class cardList extends React.Component {
  render() {
    return (
      <main className="cardList">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    );
  }
}

export default cardList;
