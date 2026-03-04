import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import GuestLayout from "../";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-guest-header": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

jest.mock("../../headers/GuestHeader", () => () => (
  <mock-guest-header data-testid="guest-header" />
));

describe("GuestLayout", () => {
  describe("renders component", () => {
    const defaultProps = { children: <div>Test</div> };
    const renderComponent = (props = defaultProps) =>
      render(<GuestLayout {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("guest-header")).toBeInTheDocument();
      expect(screen.getByText("Test")).toBeInTheDocument();
    });
  });
});
