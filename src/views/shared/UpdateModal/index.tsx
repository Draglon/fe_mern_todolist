"use client";
import { useTranslations } from "next-intl";
import { Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { Form } from "react-bootstrap";
import { Formik } from "formik";

import { useAppDispatch } from "@/store/hooks";
import useFormSubmit from "@/hooks/shared/form/useFormSubmit";
import todoListSchema from "@/lib/yupLocalised/schemas/todoList";
import { hideModal as hideModalAction } from "@/store/modal/actions";
import InputField from "@/views/shared/InputField";
import Button from "@/views/shared/bootstrap/Button";

type UpdateProductModalProps = {
  title: string;
  values: {
    _id: string;
    todo: string;
    userId: string;
  },
  onUpdate: () => void;
};

const UpdateTodoListItemModal = ({
  title,
  values,
  onUpdate,
}: UpdateProductModalProps) => {
  const dispatch = useAppDispatch();
  const tShared = useTranslations("shared");
  const onSubmit = useFormSubmit(onUpdate, { dispatch });

  const onCloseModal = () => {
    dispatch(hideModalAction());
  };

  return (
    <Modal
      className="modal"
      size="lg"
      centered
      show={true}
      onHide={onCloseModal}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Formik
        validationSchema={todoListSchema}
        onSubmit={onSubmit}
        initialValues={values}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isSubmitting, dirty }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Header className="modal__header" closeButton>
              <Modal.Title
                id="contained-modal-title-vcenter"
                className="modal__title"
              >
                {title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal__body">
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
            </Modal.Body>
            <Modal.Footer className="modal__footer">
              <Button
                className="modal__button--link"
                size="lg"
                variant="link"
                onClick={onCloseModal}
                data-testid="handleClose"
              >
                {tShared("cancel")}
              </Button>
              <Button
                className="modal__button--primary"
                type="submit"
                size="lg"
                variant="light"
                disabled={isSubmitting || !dirty}
                data-testid="handleUpdate"
              >
                <Pencil size="14" />
                <span>{tShared("edit")}</span>
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default UpdateTodoListItemModal;
