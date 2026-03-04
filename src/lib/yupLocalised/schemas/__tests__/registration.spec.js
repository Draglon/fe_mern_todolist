import registration from "../registration";

describe("registration validation schema", () => {
  it("matches snapshot", () => {
    expect(registration.describe()).toMatchSnapshot();
  });
});
