import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import InputField from "../";

describe("InputField", () => {
  describe("renders component", () => {
    const defaultProps = {
      id: "id",
      label: "label",
      name: "name",
      type: "type",
      value: "value",
      touched: true,
      error: false,
      dataTestId: "dataTestId",
      onChange: jest.fn(),
    };

    const renderComponent = (props = defaultProps) =>
      render(<InputField {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("label")).toBeInTheDocument();
      expect(screen.getByTestId("dataTestId")).toBeInTheDocument();
    });
  });
});
