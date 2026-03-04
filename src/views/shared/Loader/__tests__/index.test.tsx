import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Loader from "../";

describe("Loader", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Loader />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("loader")).toHaveClass("loader");
    });
  });
});
