"use client";
import { Form } from "react-bootstrap";

type InputFieldProps = {
  id: string;
  label?: string;
  name: string;
  type: string;
  value: string;
  placeholder?: string;
  touched: boolean | undefined;
  error: string | boolean | undefined;
  dataTestId: string;
  dataCy: string;
  onChange: any;
};

const InputField = ({
  id,
  label,
  name,
  type,
  value,
  placeholder = "",
  touched,
  error,
  onChange,
  dataTestId,
  dataCy,
}: InputFieldProps) => {
  return (
    <Form.Group className="form__field">
      {label && (
        <Form.Label className="form__label" htmlFor={id} data-cy={`${dataCy}-label`}>
          {label}
        </Form.Label>
      )}
      <Form.Control
        className="form__input"
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        isValid={touched && !error}
        data-testid={dataTestId}
        data-cy={`${dataCy}-input`}
      />
    </Form.Group>
  );
};

export default InputField;
