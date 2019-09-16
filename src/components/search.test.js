import React from "react";
import Search from "./search.js";
import renderer from "react-test-renderer";

describe("Search", () => {
  test("renders properly", () => {
    const component = renderer.create(
      <Search withIcon={true} onChangeAction={() => {}} />
    );
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
