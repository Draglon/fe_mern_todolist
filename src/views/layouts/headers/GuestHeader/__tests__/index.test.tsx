import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { usePathname } from "@/i18n/navigation";
import GuestHeader from "../";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "shared.logIn": "Log in",
      "shared.signUp": "Sign up",
    };
    return translation[key] || key;
  }),
  useLocale: jest.fn(() => "en"),
}));

jest.mock("../../../../../i18n/navigation", () => ({
  usePathname: jest.fn(() => "/"),
}));

jest.mock("../../../../shared/Logo", () => () => (
  <mock-logo data-testid="logo" />
));

jest.mock("../../../../shared/NavigationLink", () => () => (
  <mock-navigation-link data-testid="navigation-link" />
));

describe("GuestHeader", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<GuestHeader />);

    it("with pathname === '/'", () => {
      renderComponent();

      expect(screen.getByTestId("logo")).toBeInTheDocument();
      expect(screen.getAllByTestId("navigation-link")).toHaveLength(1);
    });

    it("with pathname === '/registration'", () => {
      renderComponent();

      expect(screen.getByTestId("logo")).toBeInTheDocument();
      expect(screen.getAllByTestId("navigation-link")).toHaveLength(1);
    });

    it("with other pathname", () => {
      usePathname.mockReturnValueOnce("/example");
      renderComponent();

      expect(screen.getByTestId("logo")).toBeInTheDocument();
      expect(screen.getAllByTestId("navigation-link")).toHaveLength(2);
    });
  });
});
