import Title from "../components/Title";
import React from "react";
import { shallow } from "enzyme";

describe("Title render", () => {
  it("render main-title", () => {
    const wrapper = shallow(<Title />);
    const h2 = <h2 className="main-title">Flickr Public Gallery</h2>;
    expect(wrapper.contains(h2)).toEqual(true);
  });

  it("render sub-title", () => {
    const wrapper = shallow(<Title />);
    const p = <p>Public images feed that you can access and enjoy.</p>;
    expect(wrapper.contains(p)).toEqual(true);
  });
});
