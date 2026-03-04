import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Dropdown from "../";

describe("Dropdown", () => {
  describe("renders component", () => {
    const defaultProps = {
      title: <div>Dropdown title</div>,
      items: [
        { id: "1", devider: true },
        { id: "2", devider: false, label: "label" },
      ],
      children: <span>Dropdown text</span>,
      "data-testid": "dropdown",
    };
    const renderComponent = (props = defaultProps) =>
      render(<Dropdown {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("dropdown")).toHaveTextContent(
        "Dropdown title"
      );
      expect(screen.getByTestId("dropdown")).toHaveTextContent(
        "Toggle dropdown"
      );
    });
  });
});
