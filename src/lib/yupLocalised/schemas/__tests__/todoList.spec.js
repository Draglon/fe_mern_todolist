import todoList from "../todoList";

describe("todoList validation schema", () => {
  it("matches snapshot", () => {
    expect(todoList.describe()).toMatchSnapshot();
  });
});
