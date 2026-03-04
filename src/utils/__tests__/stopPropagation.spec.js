import stopPropagation from "../stopPropagation";

describe("stopPropagation()", () => {
  it("calls stopPropagation on event param", () => {
    const event = { stopPropagation: jest.fn() };

    stopPropagation(event);

    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
  });
});
