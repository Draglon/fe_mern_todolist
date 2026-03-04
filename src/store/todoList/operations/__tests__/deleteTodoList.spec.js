import { configureStore } from "@reduxjs/toolkit";

import axios from "@/lib/axios.js";
import deleteOrder from "../deleteOrder";
import ordersReducer from "../../reducer";

describe("deleteOrder thunk", () => {
  let store;
  let axiosDeleteSpy;
  const mockOrderId = "1";
  const mockOrders = [{ _id: mockOrderId }];

  beforeEach(() => {
    axiosDeleteSpy = jest.spyOn(axios, "delete");
    store = configureStore({
      reducer: {
        orders: ordersReducer,
      },
      preloadedState: {
        orders: {
          data: mockOrders,
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
    await store.dispatch(deleteOrder({ id: mockOrderId }));

    expect(axiosDeleteSpy).toHaveBeenCalledWith(`/orders/${mockOrderId}`);
    expect(store.getState().orders.status).toEqual("loaded");
    expect(store.getState().orders.data).toEqual([]);
    expect(store.getState().orders.error).toEqual(null);
  });

  it("should handle failed DELETE request", async () => {
    const mockError = { message: "Failed to create DELETE request" };
    axiosDeleteSpy.mockRejectedValueOnce({ response: { data: mockError } });
  
    await store.dispatch(deleteOrder({ id: mockOrderId }));
  
    expect(axiosDeleteSpy).toHaveBeenCalledWith(`/orders/${mockOrderId}`);
    expect(store.getState().orders.status).toEqual("error");
    expect(store.getState().orders.data).toEqual(mockOrders);
    expect(store.getState().orders.error).toEqual(mockError);
  });
});
