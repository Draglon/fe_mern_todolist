import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Orders from "../index";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "Orders.title": "Orders",
    };
    return translation[key] || key;
  }),
}));

describe("Orders", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Orders />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Todo list")).toBeInTheDocument();
    });
  });
});
