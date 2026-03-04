import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { hideModal } from "@/store/modal/actions";
import RemoveParishModal from "../";

const mockDispatch = jest.fn();
jest.mock("../../../../store/hooks", () => ({
  ...jest.requireActual("../../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "shared.delete": "Delete",
      "shared.cancel": "Cancel",
    };
    return translation[key] || key;
  }),
}));

describe("RemoveParishModal", () => {
  describe("renders component", () => {
    const defaultProps = {
      title: "Modal title",
      onRemove: jest.fn(),
    };

    const renderComponent = (props = defaultProps) =>
      render(<RemoveParishModal {...props} />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Modal title")).toBeInTheDocument();
      expect(screen.getByTestId("handleClose")).toHaveTextContent("Cancel");
      expect(screen.getByTestId("handleRemove")).toHaveTextContent("Delete");
    });

    it("dispatches hideModal() when press cancel button", async () => {
      const user = userEvent.setup();
      renderComponent();

      await user.click(screen.getByText("Cancel"));

      expect(mockDispatch).toHaveBeenCalledWith(hideModal());
    });
  });
});
