import React, { useState, useEffect } from "react";

// Components
import Header from "./components/header";
import CardList from "./components/cardList";

// Helpers
import { filterValue } from "./helpers/getFilteredValues";

function App() {
  const [filteredData, setFilteredData] = useState([]);

  const _getFilteredValues = value => {
    let fake_api_filtered = filterValue(value);
    setFilteredData(fake_api_filtered);
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = () => {
    const url = "http://localhost:3000/data";
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setFilteredData(json);
      });
  };

  useEffect(() => {
    window.onscroll = function() {
      // // How much the user has scrolled
      const scrollTop = document.documentElement.scrollTop;
      // console.log("scrollTop", scrollTop);

      // windowHeigth is the height of the window
      const windowHeight = window.innerHeight;
      // console.log("windowHeight", windowHeight);

      // documentHeight could be larger than windowHeight
      // const documentHeight = document.height();
      const documentHeight = document.documentElement.scrollHeight;
      // console.log("documentHeight", documentHeight);

      const offset = 50;
      // sadd windowHeight is neccessary to get to the bottom
      if (scrollTop + windowHeight > documentHeight - offset) {
        // console.log("bottom");
      }
    };
  }, []);

  return (
    <div className="mainPage">
      <Header
        withIcon={true}
        onChangeAction={value => _getFilteredValues(value)}
      />
      <CardList filteredData={filteredData} />
    </div>
  );
}

export default App;
