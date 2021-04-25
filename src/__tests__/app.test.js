import { shallow } from "enzyme";
import App from "../App";

describe("App render", () => {
  it("render App component without crashing", () => {
    shallow(<App />);
  });
});
