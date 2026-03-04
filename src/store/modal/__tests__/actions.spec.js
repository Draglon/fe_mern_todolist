import { modalSlice } from "../reducer";

describe("Modal actions", () => {
  describe("showModal actions", () => {
    it("should create an increment action", () => {
      const action = modalSlice.actions.showModal();
      expect(action.type).toBe("modal/showModal");
    });
  });

  describe("hideModal actions", () => {
    it("should create an increment action", () => {
      const action = modalSlice.actions.hideModal();
      expect(action.type).toBe("modal/hideModal");
    });
  });
});
