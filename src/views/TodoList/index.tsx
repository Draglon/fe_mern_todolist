"use client";
import { useTranslations } from "next-intl";
import { Form } from "react-bootstrap";
import { Formik } from "formik";

import todoListSchema from "@/lib/yupLocalised/schemas/todoList";
import useFormSubmit from "@/hooks/shared/form/useFormSubmit";
import InputField from "@/views/shared/InputField";
import Button from "@/views/shared/bootstrap/Button";

const TodoList = () => {
  const t = useTranslations("TodoList");
  const tShared = useTranslations("shared");
  const onSubmit = useFormSubmit(() => {});

  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">{t("title")}</h1>
        <div className="">
          <Formik
            validationSchema={todoListSchema}
            onSubmit={onSubmit}
            initialValues={{
              todo: "",
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form className="from todo-list__form" onSubmit={handleSubmit}>
                <InputField
                  label={tShared("todo")}
                  id="todo"
                  name="todo"
                  type="text"
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
        </div>
      </header>
    </div>
  );
};

export default TodoList;
