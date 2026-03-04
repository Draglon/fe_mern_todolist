import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Navigation from "..";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-navigation-item": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

jest.mock("../../NavigationItem", () => () => (
  <mock-navigation-item data-testid="navigation-item" />
));

describe("Navigation", () => {
  describe("renders component", () => {
    const defaultProps = {
      menu: [
        {
          href: "href",
          text: "Link text",
        },
      ],
    };
    const renderComponent = (props = defaultProps) =>
      render(<Navigation {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("navigation-item")).toBeInTheDocument();
    });
  });
});
