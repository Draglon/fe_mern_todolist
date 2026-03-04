import * as navigation from "../navigation";

it("navigation constants match snapshot", () => {
  expect(navigation).toMatchSnapshot();
});
