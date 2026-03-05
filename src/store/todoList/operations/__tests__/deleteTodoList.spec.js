import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import deleteTodoListItem from "../deleteTodoListItem";
import todoListReducer from "../../reducer";

describe("deleteTodoListItem thunk", () => {
  let store;
  let axiosDeleteSpy;
  const mockTodoListId = "1";
  const mockTodoList = [{ _id: mockTodoListId }];

  beforeEach(() => {
    axiosDeleteSpy = jest.spyOn(axios, "delete");
    store = configureStore({
      reducer: {
        todoList: todoListReducer,
      },
      preloadedState: {
        todoList: {
          data: mockTodoList,
          status: "loading",
          error: null,
        },
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful DELETE request", async () => {
    axiosDeleteSpy.mockResolvedValueOnce({
      data: { message: "Resource deleted successfully" },
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
      request: {}
    });
    await store.dispatch(deleteTodoListItem({ id: mockTodoListId }));

    expect(axiosDeleteSpy).toHaveBeenCalledWith(`/todo_list/${mockTodoListId}`);
    expect(store.getState().todoList.status).toEqual("loaded");
    expect(store.getState().todoList.data).toEqual([]);
    expect(store.getState().todoList.error).toEqual(null);
  });

  it("should handle failed DELETE request", async () => {
    const mockError = { message: "Failed to create DELETE request" };
    axiosDeleteSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(deleteTodoListItem({ id: mockTodoListId }));
  
    expect(axiosDeleteSpy).toHaveBeenCalledWith(`/todo_list/${mockTodoListId}`);
    expect(store.getState().todoList.status).toEqual("error");
    expect(store.getState().todoList.data).toEqual(mockTodoList);
    expect(store.getState().todoList.error).toEqual(mockError);
  });
});
