import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { hideModal } from "@/store/modal/actions";
import RemoveProductModal from "../";

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

describe("RemoveProductModal", () => {
  describe("renders component", () => {
    const defaultProps = {
      title: "Modal title",
      product: {
        title: "Product title",
        photo: "/product_photo_src.png",
        serialNumber: "Serial number",
        isNew: false,
      },
      onRemove: jest.fn(),
    };

    const renderComponent = (props = defaultProps) =>
      render(<RemoveProductModal {...props} />);

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Modal title")).toBeInTheDocument();
      expect(screen.getByText("Product title")).toBeInTheDocument();
      expect(screen.getByText("Serial number")).toBeInTheDocument();
      expect(screen.getByTestId("indicator")).toBeInTheDocument();
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
