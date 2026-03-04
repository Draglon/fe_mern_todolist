import login from "../login";

describe("login validation schema", () => {
  it("matches snapshot", () => {
    expect(login.describe()).toMatchSnapshot();
  });
});
