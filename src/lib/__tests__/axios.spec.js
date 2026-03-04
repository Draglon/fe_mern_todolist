import "@testing-library/jest-dom";
import instance from "../axios";

const localStorageMock = {
  getItem: jest.fn(() => "mock-token"),
};

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("Axios Request Interceptor", () => {
  it("should add an Authorization header to requests", () => {
    const config = { headers: {} };
    const modifiedConfig = instance.interceptors.request.handlers[0].fulfilled(config);

    expect(modifiedConfig.headers.Authorization).toBe("mock-token");
    expect(localStorageMock.getItem).toHaveBeenCalledWith("token");
  });

  it("should handle request errors", async () => {
    const error = new Error("Request error");
    await expect(instance.interceptors.request.handlers[0].rejected(error)).rejects.toThrow(
      "Request error"
    );
  });
});