"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { Trash, Pencil } from "react-bootstrap-icons";

import isPresent from "@/utils/isPresent";
import removeAndHideModal from "@/utils/removeAndHideModal";
import todoListSchema from "@/lib/yupLocalised/schemas/todoList";
import useFormSubmit from "@/hooks/shared/form/useFormSubmit";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { showModal as showModalAction } from "@/store/modal/actions";
import fetchTodoList from "@/store/todoList/operations/fetchTodoList";
import createTodoListItem from "@/store/todoList/operations/createTodoListItem";
import updateTodoListItem from "@/store/todoList/operations/updateTodoListItem";
import deleteTodoListItem from "@/store/todoList/operations/deleteTodoListItem";
import { userIdSelector } from "@/store/auth/selectors";
import { todoListSelector } from "@/store/todoList/selectors";
import InputField from "@/views/shared/InputField";
import Button from "@/views/shared/bootstrap/Button";

const TodoList = () => {
  const dispatch = useAppDispatch();
  const t = useTranslations("TodoList");
  const tShared = useTranslations("shared");
  const userId = useAppSelector(userIdSelector);
  const todoList = useAppSelector(todoListSelector);
  const onSubmit = useFormSubmit(createTodoListItem);

  useEffect(() => {
    if (userId) {
      dispatch(fetchTodoList({ userId }));
    }
  }, [dispatch, userId]);

  const onUpdateItem = (todoItem: any) => () => {

    console.log("todoItem: ", todoItem);
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

  const onRemoveItem = (todoItem: any) => () => {
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
    <div className="page">
      <section className="todo-list">
        <header className="todo-list__header">
          <h1 className="todo-list__title">{t("title")}</h1>
          <Formik
            validationSchema={todoListSchema}
            onSubmit={onSubmit}
            initialValues={{
              userId,
              todo: "",
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form className="todo-list__form" onSubmit={handleSubmit}>
                <InputField
                  id="todo"
                  name="todo"
                  type="text"
                  placeholder={tShared("todo")}
                  value={values.todo}
                  touched={touched.todo}
                  error={errors.todo}
                  dataTestId="todoInput"
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  data-testid="submitButton"
                >
                  {tShared("add")}
                </Button>
              </Form>
            )}
          </Formik>
        </header>
        <div className="todo-list__content">
          <div className="todo-list__list">
            {isPresent(todoList) && todoList.map((todoItem: any) => (
              <div className="todo-list__item" key={todoItem._id}>
                <div className="todo-list__description">{todoItem.todo}</div>
                <div className="todo-list__buttons">
                  <Button className="button button-edit" onClick={onUpdateItem(todoItem)}>
                    <Pencil />
                  </Button>
                  <Button className="button button-remove" onClick={onRemoveItem(todoItem)}>
                    <Trash />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodoList;
