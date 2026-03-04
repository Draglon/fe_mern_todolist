import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";

import useFormSubmit from "@/hooks/shared/form/useFormSubmit";
import RegistrationForm from "../index";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "Registration.title": "Registration",
      "shared.email": "Email",
      "shared.password": "Password",
      "shared.signUp": "Sign up",
    };
    return translation[key] || key;
  }),
  useLocale: jest.fn(() => "en"),
}));

jest.mock("../../../../i18n/navigation", () => ({
  useRouter() {
    return {
      push: () => jest.fn(),
    };
  },
}));

jest.mock("../../../../store/auth/selectors", () => ({
  ...jest.requireActual("../../../../store/auth/selectors"),
  isLoadingSelector: jest.fn(() => true),
}));

jest.mock("../../../../hooks/shared/form/useFormSubmit", () => jest.fn());

describe("RegistrationForm", () => {
  const renderComponent = () => render(<RegistrationForm />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("renders component", () => {
    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Registration")).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByText("Password")).toBeInTheDocument();
      expect(screen.getByText("Sign up")).toBeInTheDocument();
    });
  });

  describe("onSubmit()", () => {
    it("dispatches fetchRegister()", async () => {
      const user = userEvent.setup();
      renderComponent();

      const emailInput: HTMLInputElement = screen.getByTestId("emailInput");
      const passwordInput: HTMLInputElement =
        screen.getByTestId("passwordInput");
      const submitButton = screen.getByTestId("submitButton");

      await user.type(emailInput, "test@example.com");
      expect(emailInput.value).toBe("test@example.com");

      await user.type(passwordInput, "password123");
      expect(passwordInput.value).toBe("password123");

      await user.click(submitButton);

      await waitFor(() => {
        expect(useFormSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
