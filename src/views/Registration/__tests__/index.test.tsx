import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Registration from "../index";

jest.mock("../../Registration/Form", () => () => (
  <mock-registration-form data-testid="registration-form" />
));

describe("Registration", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<Registration />);
    it("with default props", () => {
      renderComponent();

      expect(screen.getByTestId("registration-form")).toBeInTheDocument();
    });
  });
});
