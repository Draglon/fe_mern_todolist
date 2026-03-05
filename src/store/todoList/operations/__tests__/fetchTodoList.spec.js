import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import fetchTodoList from "../fetchTodoList";
import todoListReducer from "../../reducer";

describe("fetchTodoList thunk", () => {
  let store;
  let axiosGetSpy;
  const mockUserId = "1";

  beforeEach(() => {
    axiosGetSpy = jest.spyOn(axios, "get");
    store = configureStore({
      reducer: {
        todoList: todoListReducer,
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful GET request", async () => {
    const mockTodoList = [{ id: "1" }];
    axiosGetSpy.mockResolvedValueOnce({ data: mockTodoList });

    await store.dispatch(fetchTodoList({ userId: mockUserId }));

    expect(axiosGetSpy).toHaveBeenCalledWith("/todo_list", { params: { userId: mockUserId } });
    expect(store.getState().todoList.status).toBe("loaded");
    expect(store.getState().todoList.data).toEqual(mockTodoList);
    expect(store.getState().todoList.error).toEqual(null);
  });

  it("should handle failed GET request", async () => {
    const mockError = { message: "Failed to GET request" };
    axiosGetSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(fetchTodoList({ userId: mockUserId }));
  
    expect(axiosGetSpy).toHaveBeenCalledWith("/todo_list", { params: { userId: mockUserId } });
    expect(store.getState().todoList.status).toBe("error");
    expect(store.getState().todoList.error).toEqual(mockError);
  });
});
