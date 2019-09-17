import React from "react";
import CardList from "./cardList.js";
import Card from "./card.js";
import { mount } from "enzyme";
import { cardMock } from "./mocks/mocks.js";

describe("CardList", () => {
  test("renders properly", () => {
    const wrapper = mount(<CardList filteredData={[cardMock, cardMock]} />);

    expect(wrapper.find(Card).length).toBe(2);
  });
});
