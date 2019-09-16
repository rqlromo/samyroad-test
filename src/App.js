import React, { useState, useEffect } from "react";

// Components
import Header from "./components/header";
import CardList from "./components/cardList";

// Helpers
import { fake_api } from "./helpers/api";

function App() {
  const [filteredData, setFilteredData] = useState(fake_api.data);

  const _getFilteredValues = e => {
    let fake_api_filtered = fake_api.data.filter(element => {
      return (
        element.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        element.author.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });

    setFilteredData(fake_api_filtered);
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
        console.log('bottom');
      }
    };
  }, []);

  return (
    <div className="mainPage">
      <Header withIcon={true} onChangeAction={e => _getFilteredValues(e)} />
      <CardList filteredData={filteredData} />
    </div>
  );
}

export default App;
