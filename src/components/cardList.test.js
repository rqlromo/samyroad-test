import React from "react";
import CardList from "./cardList.js";
import Card from "./card.js";
import { mount } from "enzyme";
import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import { cardMock } from "./mocks/mocks.js";

chai.use(chaiEnzyme());

describe("CardList", () => {
  test("renders properly", () => {
    const wrapper = mount(<CardList filteredData={[cardMock, cardMock]} />);
    console.log("wrapper", wrapper);

    expect(wrapper.find(Card).length).toBe(2);
  });
});
