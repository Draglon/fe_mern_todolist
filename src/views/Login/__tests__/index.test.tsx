import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import LoginForm from "@/views/Login/Form";
import Login from "../index";

jest.mock("../../layouts/GuestLayout", () => () => (
  <mock-guest-layout data-testid="guest-layout">
    <LoginForm />
  </mock-guest-layout>
));

jest.mock("../../Login/Form", () => () => (
  <mock-login-form data-testid="login-form" />
));

describe("Login", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Login />);
    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("guest-layout")).toBeInTheDocument();
      expect(screen.getByTestId("login-form")).toBeInTheDocument();
    });
  });
});
