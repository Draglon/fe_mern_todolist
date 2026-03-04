import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Select from "../";

describe("Select", () => {
  describe("renders component", () => {
    const defaultProps = {
      id: "1",
      options: [{ key: "1", value: "value", label: "Option value" }],
      "data-testid": "select",
      onChange: () => {},
    };
    const renderComponent = (props = defaultProps) =>
      render(<Select {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("selectField")).toHaveClass("select-field");
      expect(screen.getByTestId("selectField")).not.toHaveClass(
        "select-classname"
      );
    });

    it("with classname", () => {
      const props = {
        ...defaultProps,
        className: "select-classname",
      };
      renderComponent(props);

      expect(screen.getByTestId("selectField")).toHaveClass("select-field");
      expect(screen.getByTestId("selectField")).toHaveClass("select-classname");
    });

    it("with select label", () => {
      const props = {
        ...defaultProps,
        label: "Select label",
      };
      renderComponent(props);

      expect(screen.getByTestId("selectField")).toHaveClass("select-field");
      expect(screen.getByTestId("selectField")).not.toHaveClass(
        "select-classname"
      );
      expect(screen.getByTestId("selectLabel")).toBeInTheDocument();
      expect(screen.getByTestId("selectLabel")).toHaveTextContent(
        "Select label"
      );
    });
  });
});
