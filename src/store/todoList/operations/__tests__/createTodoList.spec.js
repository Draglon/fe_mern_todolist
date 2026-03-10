import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import createTodoListItem from "../createTodoListItem";
import todoListReducer from "../../reducer";

describe("createTodoListItem thunk", () => {
  let store;
  let axiosPostSpy;
  const mockTodoList = {
    resetForm: jest.fn(),
    values: {
      userId: "1",
      todo: "Title",
    }
  };

  beforeEach(() => {
    axiosPostSpy = jest.spyOn(axios, "post");
    store = configureStore({
      reducer: {
        todoList: todoListReducer,
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful POST request", async () => {
    axiosPostSpy.mockResolvedValueOnce({ data: mockTodoList });

    await store.dispatch(createTodoListItem(mockTodoList));

    expect(axiosPostSpy).toHaveBeenCalledWith("/todo_list", mockTodoList.values);
    expect(store.getState().todoList.status).toBe("loaded");
    expect(store.getState().todoList.data).toEqual([mockTodoList]);
    expect(store.getState().todoList.error).toEqual(null);
  });

  it("should handle failed POST request", async () => {
    const mockError = { message: "Failed to create POST request" };
    axiosPostSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(createTodoListItem(mockTodoList));
  
    expect(axiosPostSpy).toHaveBeenCalledWith("/todo_list", mockTodoList.values);
    expect(store.getState().todoList.status).toBe("error");
    expect(store.getState().todoList.error).toEqual(mockError);
  });
});
