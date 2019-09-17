import React from "react";
import Search from "./search.js";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import sinon from "sinon";

describe("Search", () => {
  test("renders properly", () => {
    const component = renderer.create(
      <Search withIcon={true} onChangeAction={() => {}} />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("has an input", () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  test("on input change run onChangeAction prop", () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Search onChangeAction={spy} />);

    wrapper.find(".searchForm__input").simulate("change");

    expect(spy.calledOnce).toBe(true);
  });
});
