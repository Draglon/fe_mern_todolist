import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import RemoveButton from "../";

describe("RemoveButton", () => {
  describe("renders component", () => {
    const defaultProps = {
      onClick: () => {},
    };
    const renderComponent = (props = defaultProps) =>
      render(<RemoveButton {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("btnRemove")).toHaveClass("btn-remove");
    });
  });
});
