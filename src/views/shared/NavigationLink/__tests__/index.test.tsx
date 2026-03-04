import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ReactNode } from "react";

import { usePathname } from "@/i18n/navigation";
import NavigationLink from "..";

jest.mock("../../../../i18n/navigation", () => ({
  usePathname: jest.fn(() => "/"),
  Link: ({
    href,
    className,
    children,
  }: {
    href: string;
    className: string;
    children: ReactNode;
  }) => {
    return (
      <mock-link data-testid="link" href={href} className={className}>
        {children}
      </mock-link>
    );
  },
}));

describe("NavigationLink", () => {
  describe("renders component", () => {
    const defaultProps = {
      href: "/",
      children: <span>Link text</span>,
      className: "link",
    };
    const renderComponent = (props = defaultProps) =>
      render(<NavigationLink {...props} />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("link")).toHaveTextContent("Link text");
      expect(screen.getByTestId("link")).toHaveClass("link");
      expect(screen.getByTestId("link")).toHaveClass("active");
    });

    it("when link is not active", () => {
      usePathname.mockImplementation(() => "/home");
      renderComponent();

      expect(screen.getByTestId("link")).toHaveTextContent("Link text");
      expect(screen.getByTestId("link")).toHaveClass("link");
      expect(screen.getByTestId("link")).not.toHaveClass("active");
    });
  });
});
