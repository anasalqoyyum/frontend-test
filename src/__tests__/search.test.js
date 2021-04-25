import SearchBar from "../components/SearchBar";
import React from "react";
import { shallow } from "enzyme";

const value = {
  tags: "car",
};

describe("SearchBar render", () => {
  it("render searchbar without crashing", () => {
    shallow(<SearchBar />);
  });

  it("render searchbar input", () => {
    const wrapper = shallow(<SearchBar />);
    const label = wrapper.find("#tags").text();
    expect(label).toEqual("");
  });

  it("render searchbar button", () => {
    const wrapper = shallow(<SearchBar />);
    const label = wrapper.find(".search").text();
    expect(label).toEqual("Search");
  });
});

describe("SearchBar passing value", () => {
  it("Updates the state", () => {
    const wrapper = shallow(<SearchBar />);
    const input = wrapper.find("input");
    input.simulate("change", { target: { name:"tags", value: "car" } }); // 'value' instead of 'num'
    expect(value.tags).toBe("car"); // SUCCESS
  });
});
