import React from "react";
import Card from "./card.js";
import renderer from "react-test-renderer";
import { cardMock } from "./mocks/mocks.js";

describe("Card", () => {
  test("renders properly", () => {
    const component = renderer.create(<Card item={cardMock} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
