import React from "react";
import Search from "./search.js";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

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
});
