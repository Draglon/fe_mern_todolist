import isPresent from "../isPresent";

describe("isPresent", () => {
  it("returns true if data is present", () => {
    expect(isPresent([1, 2, 3])).toEqual(true);
    expect(isPresent({ status: true })).toEqual(true);
    expect(isPresent(123)).toEqual(true);
    expect(isPresent("123")).toEqual(true);
  });

  it("returns false if data is absent", () => {
    expect(isPresent([])).toEqual(false);
    expect(isPresent({})).toEqual(false);
    expect(isPresent(null)).toEqual(false);
    expect(isPresent(undefined)).toEqual(false);
    expect(isPresent("")).toEqual(false);
  });
});
