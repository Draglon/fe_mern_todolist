import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import UserHeader from "..";

describe("UserHeader", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<UserHeader />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Logo")).toBeInTheDocument();
      expect(screen.getByText("Log out")).toBeInTheDocument();
    });
  });
});
