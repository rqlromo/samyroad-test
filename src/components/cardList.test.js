import React from "react";
import CardList from "./cardList.js";
import Card from "./card.js";
import { shallow } from "enzyme";
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe("CardList", () => {
  xtest("renders properly", () => {
    const wrapper = shallow(<CardList/>);
    console.log('wrapper', wrapper);

    expect(wrapper.find('.card')).to.have.lengthOf(10)
  });
});
