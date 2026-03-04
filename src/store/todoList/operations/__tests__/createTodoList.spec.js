import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import createOrder from "../createOrder";
import orderReducer from "../../reducer";

describe("createOrder thunk", () => {
  let store;
  let axiosPostSpy;
  const mockOrder = {
    title: "Title",
    description: "Description",
    date: "Date",
  };

  beforeEach(() => {
    axiosPostSpy = jest.spyOn(axios, "post");
    store = configureStore({
      reducer: {
        orders: orderReducer,
      },
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should handle successful POST request", async () => {
    axiosPostSpy.mockResolvedValueOnce({ data: mockOrder });

    await store.dispatch(createOrder(mockOrder));

    expect(axiosPostSpy).toHaveBeenCalledWith("/orders", mockOrder);
    expect(store.getState().orders.status).toBe("loaded");
    expect(store.getState().orders.data).toEqual(mockOrder);
    expect(store.getState().orders.error).toEqual(null);
  });

  it("should handle failed POST request", async () => {
    const mockError = { message: "Failed to create POST request" };
    axiosPostSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(createOrder(mockOrder));
  
    expect(axiosPostSpy).toHaveBeenCalledWith("/orders", mockOrder);
    expect(store.getState().orders.status).toBe("error");
    expect(store.getState().orders.error).toEqual(mockError);
  });
});
