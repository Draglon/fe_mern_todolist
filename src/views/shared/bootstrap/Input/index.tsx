"use client";
import clsx from "clsx";
import Form from "react-bootstrap/Form";

type InputProps = {
  id: string;
  label?: string;
  type?: "text" | "password";
  size?: "sm" | "lg";
  placeholder?: string;
  className?: string;
};

function Input({
  id,
  label,
  type = "text",
  size,
  placeholder,
  className,
  ...props
}: InputProps) {
  return (
    <div className={clsx("input-field", className)} data-testid="inputField">
      {label && (
        <Form.Label
          htmlFor={id}
          className="input-field__label"
          data-testid="inputLabel"
        >
          {label}
        </Form.Label>
      )}
      <Form.Control
        id={id}
        type={type}
        size={size}
        placeholder={placeholder}
        className="input-field__input"
        data-testid="input"
        {...props}
      />
    </div>
  );
}

export default Input;
