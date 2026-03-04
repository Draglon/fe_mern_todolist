import * as selectors from "../selectors";

describe("Auth selectors", () => {
  describe("isAuthSelector()", () => {
    it("returns true when data is present", () => {
      const initialState = { 
        data: { data: "data" },
        status: "loading",
      };
  
      const state = {
        auth: initialState,
      };

      expect(selectors.isAuthSelector(state)).toEqual(true);
    });

    it("returns false when data is absent", () => {
      const initialState = { 
        data: null,
        status: "pending",
      };
  
      const state = {
        auth: initialState,
      };

      expect(selectors.isAuthSelector(state)).toEqual(false);
    });
  });

  describe("isLoadingSelector()", () => {
    it("returns true when status is loading", () => {
      const initialState = { 
        data: null,
        status: "loading",
      };
  
      const state = {
        auth: initialState,
      };

      expect(selectors.isLoadingSelector(state)).toEqual(true);
    });

    it("returns false when status is not loading", () => {
      const initialState = { 
        data: null,
        status: "pending",
      };
  
      const state = {
        auth: initialState,
      };

      expect(selectors.isLoadingSelector(state)).toEqual(false);
    });
  });
});
