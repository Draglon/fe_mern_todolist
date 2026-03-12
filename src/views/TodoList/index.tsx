"use client";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Form } from "react-bootstrap";
import { Formik } from "formik";

import isPresent from "@/utils/isPresent";
import todoListSchema from "@/lib/yupLocalised/schemas/todoList";
import useFormSubmit from "@/hooks/shared/form/useFormSubmit";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import fetchTodoList from "@/store/todoList/operations/fetchTodoList";
import createTodoListItem from "@/store/todoList/operations/createTodoListItem";
import { userIdSelector } from "@/store/auth/selectors";
import { todoListSelector } from "@/store/todoList/selectors";
import InputField from "@/views/shared/InputField";
import Button from "@/views/shared/bootstrap/Button";

import List from "@/views/TodoList/List";

type TodoItemProps = {
  _id: string;
  userId: string;
  todo: string;
}

const TodoList = () => {
  const dispatch = useAppDispatch();
  const t = useTranslations("TodoList");
  const tShared = useTranslations("shared");
  const userId: string = useAppSelector(userIdSelector);
  const todoList: TodoItemProps[] = useAppSelector(todoListSelector);
  const onSubmit = useFormSubmit(createTodoListItem);

  useEffect(() => {
    if (userId) {
      dispatch(fetchTodoList({ userId }));
    }
  }, [dispatch, userId]);

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
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting, dirty }) => (
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
                  dataCy="todo"
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting || !dirty}
                  dataTestId="submitButton"
                  dataCy="btn-submit"
                >
                  {tShared("add")}
                </Button>
              </Form>
            )}
          </Formik>
        </header>
        <div className="todo-list__content">
          {isPresent(todoList) && <List todoList={todoList} />}
        </div>
      </section>
    </div>
  );
};

export default TodoList;
