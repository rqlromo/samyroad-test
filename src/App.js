import React from "react";

// Components
import Header from "./components/header";
import CardList from "./components/cardList";


function App() {
  return (
    <div className="mainPage">
      <Header withIcon={true} onChangeAction={(e) => console.log(e.target.value)} />
      <CardList />
    </div>
  );
}

export default App;
