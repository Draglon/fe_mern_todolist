import { todoListSlice } from "../reducer";
import fetchTodoList from "../operations/fetchTodoList";
import createTodoListItem from "../operations/createTodoListItem";
import updateTodoListItem from "../operations/updateTodoListItem";
import deleteTodoListItem from "../operations/deleteTodoListItem";

describe("todoListSlice reducer", () => {
  const initialState = {
    data: [],
    status: undefined,
    error: null,
  };

  describe("todoListSlice extraReducers for", () => {
    describe("fetchTodoList", () => {
      it("should handle fetchTodoList.pending", () => {
        const newState = todoListSlice.reducer(initialState, fetchTodoList.pending());

        expect(newState.status).toEqual("loading");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(null);
      });

      it("should handle fetchTodoList.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = todoListSlice.reducer(defaultState, fetchTodoList.fulfilled(payload));

        expect(newState.status).toEqual("loaded");
        expect(newState.data).toEqual(payload);
        expect(newState.error).toEqual(null);
      });

      it("should handle fetchTodoList.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const errorPayload = { message: "Failed to create GET request" };
        const newState = todoListSlice.reducer(defaultState, fetchTodoList.rejected(null, "requestId", null, errorPayload));

        expect(newState.status).toEqual("error");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(errorPayload);
      });
    });

    describe("createTodoListItem", () => {
      it("should handle createTodoListItem.pending", () => {
        const newState = todoListSlice.reducer(initialState, createTodoListItem.pending());

        expect(newState.status).toEqual("loading");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(null);
      });

      it("should handle createTodoListItem.fulfilled", () => {
        const defaultState = { ...initialState, status: "loading" };
        const payload = { data: "data" };
        const newState = todoListSlice.reducer(defaultState, createTodoListItem.fulfilled(payload));

        expect(newState.status).toEqual("loaded");
        expect(newState.data).toEqual([payload]);
        expect(newState.error).toEqual(null);
      });

      it("should handle createTodoListItem.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const errorPayload = { message: "Failed to create POST request" };
        const newState = todoListSlice.reducer(defaultState, createTodoListItem.rejected(null, "requestId", null, errorPayload));

        expect(newState.status).toEqual("error");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(errorPayload);
      });
    });

    describe("updateTodoListItem", () => {
      it("should handle updateTodoListItem.pending", () => {
        const newState = todoListSlice.reducer(initialState, updateTodoListItem.pending());

        expect(newState.status).toEqual("loading");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(null);
      });

      it("should handle updateTodoListItem.fulfilled", () => {
        const defaultState = { data: [{ _id: "1", todo: "Todo 1" }], status: "loading", error: null };
        const payload = { _id: "1", todo: "Todo 2" };
        const newState = todoListSlice.reducer(defaultState, updateTodoListItem.fulfilled(payload));

        console.log("newState: ", newState.status);
        console.log("newState: ", newState.data);
        console.log("newState: ", newState.error);

        expect(newState.status).toEqual("loaded");
        expect(newState.data).toEqual([payload]);
        expect(newState.error).toEqual(null);
      });

      it("should handle updateTodoListItem.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const errorPayload = { message: "Failed to create POST request" };
        const newState = todoListSlice.reducer(defaultState, updateTodoListItem.rejected(null, "requestId", null, errorPayload));

        expect(newState.status).toEqual("error");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(errorPayload);
      });
    });

    describe("deleteTodoListItem", () => {
      it("should handle deleteTodoListItem.pending", () => {
        const newState = todoListSlice.reducer(initialState, deleteTodoListItem.pending());

        expect(newState.status).toEqual("loading");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(null);
      });

      it("should handle deleteTodoListItem.fulfilled", () => {
        const defaultState = { ...initialState, data: [{ _id: "1" }, { _id: "2" }], status: "loading" };
        const payload = "1";
        const newState = todoListSlice.reducer(defaultState, deleteTodoListItem.fulfilled(payload));

        expect(newState.status).toEqual("loaded");
        expect(newState.data).toEqual([{ _id: "2" }]);
        expect(newState.error).toEqual(null);
      });

      it("should handle deleteTodoListItem.rejected", () => {
        const defaultState = { ...initialState, status: "error" };
        const errorPayload = { message: "Failed to create DELETE request" };
        const newState = todoListSlice.reducer(defaultState, deleteTodoListItem.rejected(null, "requestId", null, errorPayload));

        expect(newState.status).toEqual("error");
        expect(newState.data).toEqual([]);
        expect(newState.error).toEqual(errorPayload);
      });
    });
  });
});
