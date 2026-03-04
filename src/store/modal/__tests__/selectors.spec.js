import * as selectors from "../selectors";

describe("Modal selectors", () => {
  describe("modalSelector()", () => {
    const initialState = { 
      modalType: null,
      modalProps: {},
    };

    const state = {
      modal: initialState,
    };

    it("returns default modal props", () => {
      expect(selectors.modalSelector(state)).toEqual(initialState);
    });
  });
});
