"use client";
import { Form } from "react-bootstrap";

type InputFieldProps = {
  id: string;
  label: string;
  name: string;
  type: string;
  value: string;
  touched: boolean | undefined;
  error: string | boolean | undefined;
  dataTestId: string;
  onChange: any;
};

const InputField = ({
  id,
  label,
  name,
  type,
  value,
  touched,
  error,
  onChange,
  dataTestId,
}: InputFieldProps) => {
  return (
    <Form.Group className="from__field">
      <Form.Label className="from__label" htmlFor={id}>
        {label}
      </Form.Label>
      <Form.Control
        className="from__input"
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        isValid={touched && !error}
        data-testid={dataTestId}
      />
    </Form.Group>
  );
};

export default InputField;
