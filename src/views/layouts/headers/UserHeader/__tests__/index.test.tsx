import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import UserHeader from "..";

const mockDispatch = jest.fn();
jest.mock("../../../../../store/hooks", () => ({
  ...jest.requireActual("../../../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "logout": "Log out",
    };
    return translation[key] || key;
  }),
  useLocale: jest.fn(() => "en"),
}));

jest.mock("../../../../../i18n/navigation", () => ({
  useRouter() {
    return {
      push: () => jest.fn(),
    };
  },
}));

describe("UserHeader", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<UserHeader />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Log out")).toBeInTheDocument();
    });
  });
});
