import { shallow } from "enzyme";
import App from "../App";

describe("App should render without crashing", () => {
  test("It should not crash", () => {
    shallow(<App />);
  });
});
