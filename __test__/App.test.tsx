import renderer from "react-test-renderer";
import App from "../App";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();
    // @ts-ignore
    expect(tree.children.length).toBe(1);
  });
});