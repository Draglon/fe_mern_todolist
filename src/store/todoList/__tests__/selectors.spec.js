import * as selectors from "../selectors";

describe("Orders selectors", () => {
  describe("ordersSelector()", () => {
    it("returns data when data is present", () => {
      const initialState = { 
        data: { data: "data" },
        status: "loading",
      };
  
      const state = {
        orders: initialState,
      };

      expect(selectors.ordersSelector(state)).toEqual(initialState.data);
    });

    it("returns null when data is absent", () => {
      const initialState = { 
        data: null,
        status: "pending",
      };
  
      const state = {
        orders: initialState,
      };

      expect(selectors.ordersSelector(state)).toEqual(initialState.data);
    });
  });

  describe("isLoadingSelector()", () => {
    it("returns true when status is loading", () => {
      const initialState = { 
        data: null,
        status: "loading",
      };
  
      const state = {
        orders: initialState,
      };

      expect(selectors.isLoadingSelector(state)).toEqual(true);
    });

    it("returns false when status is not loading", () => {
      const initialState = { 
        data: null,
        status: "pending",
      };
  
      const state = {
        orders: initialState,
      };

      expect(selectors.isLoadingSelector(state)).toEqual(false);
    });
  });
});
