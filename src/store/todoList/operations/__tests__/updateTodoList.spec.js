import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import updateTodoListItem from "../updateTodoListItem";
import todoListReducer from "../../reducer";

describe("updateTodoListItem thunk", () => {
  let store;
  let axiosPatchSpy;
  const mockTodoList = {
    values: {
      _id: "1",
      userId: "1",
      todo: "Todo 1",
    }
  };

  beforeEach(() => {
    axiosPatchSpy = jest.spyOn(axios, "patch");
    store = configureStore({
      reducer: {
        todoList: todoListReducer,
      },
      preloadedState: {
        todoList: {
          data: [mockTodoList.values],
          status: "loading",
          error: null,
        },
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful PATCH request", async () => {
    const mockNewValues = { _id: "1", userId: "1", todo: "Todo 2" };
    axiosPatchSpy.mockResolvedValueOnce({ data: mockNewValues });

    await store.dispatch(updateTodoListItem({ values: mockNewValues }));

    expect(axiosPatchSpy).toHaveBeenCalledWith(`/todo_list/${mockNewValues._id}`, mockNewValues);
    expect(store.getState().todoList.status).toBe("loaded");
    expect(store.getState().todoList.data).toEqual([mockNewValues]);
    expect(store.getState().todoList.error).toEqual(null);
  });

  it("should handle failed PATCH request", async () => {
    const mockError = { message: "Failed to create PATCH request" };
    axiosPatchSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(updateTodoListItem(mockTodoList));
  
    expect(axiosPatchSpy).toHaveBeenCalledWith(`/todo_list/${mockTodoList.values._id}`, mockTodoList.values);
    expect(store.getState().todoList.status).toBe("error");
    expect(store.getState().todoList.error).toEqual(mockError);
  });
});
