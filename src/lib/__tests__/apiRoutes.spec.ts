import * as apiRoutes from "../apiRoutes";

describe("apiRoutes constants", () => {
  describe("User", () => {
    it("authLoginRoute", () => {
      expect(apiRoutes.authLoginRoute).toBe("/auth/login");
    });

    it("authRegistrationRoute", () => {
      expect(apiRoutes.authRegistrationRoute).toBe("/auth/register");
    });

    it("authUserRoute", () => {
      expect(apiRoutes.authUserRoute).toBe("/auth/user");
    });
  });

  describe("Todo list", () => {
    it("todoListRoute", () => {
      expect(apiRoutes.todoListRoute).toBe("/todo_list");
    });

    it("todoListItemRoute", () => {
      const orderId = "3";
      expect(apiRoutes.todoListItemRoute(orderId)).toBe(`/todo_list/${orderId}`);
    });
  });
});
