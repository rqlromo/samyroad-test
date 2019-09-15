import React from "react";
import Like from "./like.js";
import renderer from "react-test-renderer";

describe("Like", () => {
  test("renders properly", () => {
    const component = renderer.create(<Like likesCount={4} liked={true} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
