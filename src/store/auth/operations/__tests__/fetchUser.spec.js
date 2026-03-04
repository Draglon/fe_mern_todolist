import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import fetchUser from "../fetchUser";
import authReducer from "../../reducer";

describe("fetchUser thunk", () => {
  let store;
  let axiosGetSpy;
  const mockUser = {
    email: "email@gmail.com",
    password: "123456",
  };

  beforeEach(() => {
    axiosGetSpy = jest.spyOn(axios, "get");
    store = configureStore({
      reducer: {
        auth: authReducer,
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful GET request", async () => {
    axiosGetSpy.mockResolvedValueOnce({ data: mockUser });

    await store.dispatch(fetchUser());

    expect(axiosGetSpy).toHaveBeenCalledWith("/auth/user", {});
    expect(store.getState().auth.status).toBe("loaded");
    expect(store.getState().auth.data).toEqual(mockUser);
    expect(store.getState().auth.error).toEqual(null);
  });

  it("should handle failed GET request", async () => {
    const mockError = { message: "Failed to GET request" };
    axiosGetSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(fetchUser());
  
    expect(axiosGetSpy).toHaveBeenCalledWith("/auth/user", {});
    expect(store.getState().auth.status).toBe("error");
    expect(store.getState().auth.data).toBe(null);
    expect(store.getState().auth.error).toEqual(mockError);
  });
});
