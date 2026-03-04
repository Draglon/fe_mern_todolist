import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import UserLayout from "../";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-user-header": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "mock-modal-root": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

jest.mock("../../headers/UserHeader", () => () => (
  <mock-user-header data-testid="user-header" />
));
jest.mock("../../../shared/ModalRoot", () => () => (
  <mock-modal-root data-testid="modal-root" />
));

describe("UserLayout", () => {
  describe("renders component", () => {
    const defaultProps = { children: <div>Test</div> };
    const renderComponent = (props = defaultProps) =>
      render(<UserLayout {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("user-header")).toBeInTheDocument();
      expect(screen.getByTestId("modal-root")).toBeInTheDocument();
      expect(screen.getByText("Test")).toBeInTheDocument();
    });
  });
});
