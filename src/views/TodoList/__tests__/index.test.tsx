import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import TodoList from "../index";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockImplementation(() => (key: string) => {
    const translation: { [key: string]: string } = {
      "title": "Todo list title",
      "todo": "Placeholder todo",
      "add": "Add",
    };
    return translation[key] || key;
  }),
}));

const mockDispatch = jest.fn();
jest.mock("../../../store/hooks", () => ({
  ...jest.requireActual("../../../store/hooks"),
  useAppDispatch: () => mockDispatch,
  useAppSelector: jest.fn((selector) => selector()),
}));

jest.mock("../../../store/auth/selectors", () => ({
  ...jest.requireActual("../../../store/auth/selectors"),
  userIdSelector: jest.fn(() => "1"),
}));

jest.mock("../../../store/todoList/selectors", () => ({
  ...jest.requireActual("../../../store/todoList/selectors"),
  todoListSelector: jest.fn(() => []),
}));

describe("TodoList", () => {
  describe("renders component", () => {
    const renderComponent = () => render(<TodoList />);

    it("with default props", () => {
      renderComponent();

      expect(screen.getByText("Todo list title")).toBeInTheDocument();
    });
  });
});
