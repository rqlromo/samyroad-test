import React from "react";
import Header from "./header.js";
import renderer from "react-test-renderer";

describe("Header", () => {
  test("renders properly", () => {
    const component = renderer.create(<Header onChangeAction={() => {}} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
