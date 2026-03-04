import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import fetchOrders from "../fetchOrders";
import ordersReducer from "../../reducer";

describe("fetchOrders thunk", () => {
  let store;
  let axiosGetSpy;

  beforeEach(() => {
    axiosGetSpy = jest.spyOn(axios, "get");
    store = configureStore({
      reducer: {
        orders: ordersReducer,
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful GET request", async () => {
    const mockOrders = [{ id: "1" }];
    axiosGetSpy.mockResolvedValueOnce({ data: mockOrders });

    await store.dispatch(fetchOrders());

    expect(axiosGetSpy).toHaveBeenCalledWith("/orders", {});
    expect(store.getState().orders.status).toBe("loaded");
    expect(store.getState().orders.data).toEqual(mockOrders);
    expect(store.getState().orders.error).toEqual(null);
  });

  it("should handle failed GET request", async () => {
    const mockError = { message: "Failed to GET request" };
    axiosGetSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(fetchOrders());
  
    expect(axiosGetSpy).toHaveBeenCalledWith("/orders", {});
    expect(store.getState().orders.status).toBe("error");
    expect(store.getState().orders.error).toEqual(mockError);
  });
});
