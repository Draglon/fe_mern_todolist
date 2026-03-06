import * as selectors from "../selectors";

describe("todoList selectors", () => {
  describe("todoListSelector()", () => {
    it("returns data when data is present", () => {
      const initialState = { 
        data: [{ id: "1", data: "data" }],
        status: "loading",
      };
  
      const state = {
        todoList: initialState,
      };

      expect(selectors.todoListSelector(state)).toEqual(initialState.data);
    });

    it("returns [] when data is absent", () => {
      const initialState = { 
        data: [],
        status: "pending",
      };
  
      const state = {
        todoList: initialState,
      };

      expect(selectors.todoListSelector(state)).toEqual(initialState.data);
    });
  });

  describe("isLoadingSelector()", () => {
    it("returns true when status is loading", () => {
      const initialState = { 
        data: null,
        status: "loading",
      };
  
      const state = {
        todoList: initialState,
      };

      expect(selectors.isLoadingSelector(state)).toEqual(true);
    });

    it("returns false when status is not loading", () => {
      const initialState = { 
        data: null,
        status: "pending",
      };
  
      const state = {
        todoList: initialState,
      };

      expect(selectors.isLoadingSelector(state)).toEqual(false);
    });
  });
});
