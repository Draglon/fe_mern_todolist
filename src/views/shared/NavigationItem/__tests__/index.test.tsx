import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Navigation from "..";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "shared.link": "Link text",
    };
    return translation[key] || key;
  }),
}));

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mock-navigation-link": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

jest.mock("../../NavigationLink", () => () => (
  <mock-navigation-link data-testid="navigation-link" />
));

describe("Navigation", () => {
  describe("renders component", () => {
    const defaultProps = { text: "shared.link", href: "href" };
    const renderComponent = (props = defaultProps) =>
      render(<Navigation {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("navigation-link")).toBeInTheDocument();
    });
  });
});
