import Title from "../components/Title";
import React from "react";
import { mount } from "enzyme";

describe("Title should render without crashing and correctly", () => {
  test("Title Components renders the text inside it", () => {
    const wrapper = mount(<Title />);
    const h2 = wrapper.find(".main-title");
    expect(h2.text()).toBe("Flickr Public Gallery");
  });
});
