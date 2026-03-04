import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Alert from "../";

describe("Alert", () => {
  describe("renders component", () => {
    const defaultProps = {
      children: <span>Alert text</span>,
      "data-testid": "alert",
    };
    const renderComponent = (props = defaultProps) =>
      render(<Alert {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("alert")).toHaveClass("alert");
      expect(screen.getByTestId("alert")).not.toHaveClass("alert-classname");
      expect(screen.getByTestId("alert")).toHaveTextContent("Alert text");
    });

    it("with classname", () => {
      const props = {
        ...defaultProps,
        className: "alert-classname",
      };
      renderComponent(props);

      expect(screen.getByTestId("alert")).toHaveClass("alert");
      expect(screen.getByTestId("alert")).toHaveClass("alert-classname");
      expect(screen.getByTestId("alert")).toHaveTextContent("Alert text");
    });
  });
});
