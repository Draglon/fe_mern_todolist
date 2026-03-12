"use client";
import { useTranslations } from "next-intl";
import { Trash, Pencil } from "react-bootstrap-icons";

import removeAndHideModal from "@/utils/removeAndHideModal";
import { useAppDispatch } from "@/store/hooks";
import { showModal as showModalAction } from "@/store/modal/actions";
import updateTodoListItem from "@/store/todoList/operations/updateTodoListItem";
import deleteTodoListItem from "@/store/todoList/operations/deleteTodoListItem";
import Button from "@/views/shared/bootstrap/Button";

type TodoItemProps = {
  _id: string;
  userId: string;
  todo: string;
}

const TodoList: React.FC<{ todoList: TodoItemProps[] }> = ({ todoList }) => {
  const dispatch = useAppDispatch();
  const tShared = useTranslations("shared");

  const onUpdateItem = (todoItem: TodoItemProps) => () => {
    dispatch(
      showModalAction({
        modalType: "UPDATE_MODAL",
        modalProps: {
          title: tShared("modal.updateItem.title"),
          values: {
            _id: todoItem._id,
            userId: todoItem.userId,
            todo: todoItem.todo,
          },
          onUpdate: updateTodoListItem,
        },
      })
    );
  }

  const onRemoveItem = (todoItem: TodoItemProps) => () => {
    dispatch(
      showModalAction({
        modalType: "REMOVE_MODAL",
        modalProps: {
          title: tShared("modal.removeItem.title"),
          todoItem,
          onRemove: removeAndHideModal(dispatch, deleteTodoListItem, { id: todoItem._id }),
        },
      })
    );
  }

  return (
    <div className="todo-list__list">
      {(todoList as TodoItemProps[]).map((todoItem: TodoItemProps) => (
        <div className="todo-list__item" key={todoItem._id}>
          <div className="todo-list__description">{todoItem.todo}</div>
          <div className="todo-list__buttons">
            <Button
              className="button button-edit"
              onClick={onUpdateItem(todoItem)}
              dataTestId="editButton"
              dataCy="btn-edit"
            >
              <Pencil />
            </Button>
            <Button
              className="button button-remove"
              onClick={onRemoveItem(todoItem)}
              dataTestId="removeButton"
              dataCy="btn-remove"
            >
              <Trash />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
