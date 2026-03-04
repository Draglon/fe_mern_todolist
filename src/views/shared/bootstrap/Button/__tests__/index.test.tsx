import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "../";

describe("Button", () => {
  describe("renders component", () => {
    const defaultProps = {
      children: <span>Button text</span>,
      "data-testid": "button",
      onClick: jest.fn(),
    };
    const renderComponent = (props = defaultProps) =>
      render(<Button {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("button")).toHaveTextContent("Button text");
    });
  });
});
