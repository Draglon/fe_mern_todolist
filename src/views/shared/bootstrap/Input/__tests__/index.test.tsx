import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Input from "../";

describe("Input", () => {
  describe("renders component", () => {
    const defaultProps = {
      id: "1",
      placeholder: "Input placeholder",
      "data-testid": "input",
    };
    const renderComponent = (props = defaultProps) =>
      render(<Input {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("inputField")).toHaveClass("input-field");
      expect(screen.getByTestId("inputField")).not.toHaveClass(
        "input-classname"
      );
      expect(
        screen.getByPlaceholderText("Input placeholder")
      ).toBeInTheDocument();
    });

    it("with classname", () => {
      const props = {
        ...defaultProps,
        className: "input-classname",
      };
      renderComponent(props);

      expect(screen.getByTestId("inputField")).toHaveClass("input-field");
      expect(screen.getByTestId("inputField")).toHaveClass("input-classname");
      expect(
        screen.getByPlaceholderText("Input placeholder")
      ).toBeInTheDocument();
    });

    it("with input label", () => {
      const props = {
        ...defaultProps,
        label: "Input label",
      };
      renderComponent(props);

      expect(screen.getByTestId("inputField")).toHaveClass("input-field");
      expect(screen.getByTestId("inputField")).not.toHaveClass(
        "input-classname"
      );
      expect(screen.getByTestId("inputLabel")).toBeInTheDocument();
      expect(screen.getByTestId("inputLabel")).toHaveTextContent("Input label");
      expect(
        screen.getByPlaceholderText("Input placeholder")
      ).toBeInTheDocument();
    });
  });
});
