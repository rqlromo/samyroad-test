import React from "react";
import App from "./App.js";
import renderer from "react-test-renderer";
import * as filterValue from "../src/helpers/getFilteredValues.js";

describe("App", () => {
  test("renders properly", () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("Testing filteredValues return something", () => {
    expect(filterValue.filterValue('co')).toBeDefined();
  });

  test("Testing filteredValues return an array", () => {
    expect(filterValue.filterValue('co').length).toBe(3);
  });

  
});
