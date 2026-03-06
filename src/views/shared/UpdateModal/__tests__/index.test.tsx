import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { hideModal } from "@/store/modal/actions";
import UpdateModal from "../";

const mockDispatch = jest.fn();
jest.mock("../../../../store/hooks", () => ({
  ...jest.requireActual("../../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "todo": "Todo",
      "edit": "Edit",
      "cancel": "Cancel",
    };
    return translation[key] || key;
  }),
}));

describe("UpdateModal", () => {
  describe("renders component", () => {
    const defaultProps = {
      title: "Modal title",
      values: {
        _id: "1",
        todo: "Todo title",
        userId: "1",
      },
      onUpdate: jest.fn(),
    };

    const renderComponent = (props = defaultProps) =>
      render(<UpdateModal {...props} />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Modal title")).toBeInTheDocument();
      expect(screen.getByTestId("todoInput")).toHaveClass("from__input form-control");
      expect(screen.getByTestId("handleClose")).toHaveTextContent("Cancel");
      expect(screen.getByTestId("handleUpdate")).toHaveTextContent("Edit");
    });

    it("dispatches hideModal() when press cancel button", async () => {
      const user = userEvent.setup();
      renderComponent();

      await user.click(screen.getByText("Cancel"));

      expect(mockDispatch).toHaveBeenCalledWith(hideModal());
    });
  });
});
