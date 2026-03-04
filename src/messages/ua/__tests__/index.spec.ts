import ua from "..";

it("ua locale matches snapshot", () => {
  expect(ua).toMatchSnapshot();
});
