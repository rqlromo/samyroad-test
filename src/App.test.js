import React from "react";
import App from "./App.js";
import renderer from "react-test-renderer";
import * as filterValue from "../src/helpers/getFilteredValues.js";
import { cardMock } from "./components/mocks/mocks.js";

describe("App", () => {
  test("renders properly", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("Testing filteredValues return something", () => {
    expect(filterValue.filterValue("co", [cardMock, cardMock])).toBeDefined();
  });

  test("Testing filteredValues found input value in the array", () => {
    expect(filterValue.filterValue("co", [cardMock, cardMock]).length).toBe(2);
  });
});
