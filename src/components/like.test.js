import React from "react";
import Like from "./like.js";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

describe("Like", () => {
  test("renders properly", () => {
    const component = renderer.create(<Like likesCount={4} liked={true} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("liked state should change onClick", () => {
    const wrapper = mount(<Like liked={true} likesCount={4} />);

    wrapper.find(".like__icon").simulate("click");

    expect(wrapper.find(".like__icon_liked").length).toBe(0);
  });

  test("liked state should change onClick", () => {
    const wrapper = mount(<Like liked={false} likesCount={4} />);

    wrapper.find(".like__icon").simulate("click");

    expect(wrapper.find(".like__icon_liked").length).toBe(1);
  });
});
