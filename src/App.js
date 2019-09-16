import React, { useState } from "react";

// Components
import Header from "./components/header";
import CardList from "./components/cardList";

// Helpers
import { fake_api } from "./helpers/api";

function App() {
  const [filteredData, setFilteredData] = useState(fake_api.data);

  const _getFilteredValues = e => {
    let fake_api_filtered = fake_api.data.filter(element => {
      return element.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilteredData(fake_api_filtered);
  };

  return (
    <div className="mainPage">
      <Header withIcon={true} onChangeAction={e => _getFilteredValues(e)} />
      <CardList filteredData={filteredData} />
    </div>
  );
}

export default App;
