import fetchTodoList from "./fetchTodoList";
import createTodoListItem from "./createTodoListItem";
import updateTodoListItem from "./updateTodoListItem";
import deleteTodoListItem from "./deleteTodoListItem";

const todoListOperations = [fetchTodoList, createTodoListItem, updateTodoListItem, deleteTodoListItem];

export default todoListOperations;
