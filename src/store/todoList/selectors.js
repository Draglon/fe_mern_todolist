export const isLoadingSelector = state => state.todoList.status === "loading";
export const todoListSelector = state => state.todoList?.data;
