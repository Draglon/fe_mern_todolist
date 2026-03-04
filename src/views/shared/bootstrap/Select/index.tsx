"use client";
import clsx from "clsx";
import Form from "react-bootstrap/Form";

type SelectProps = {
  id: string;
  label?: string;
  type?: "text" | "password";
  size?: "sm" | "lg";
  disabled?: boolean;
  className?: string;
  options: {
    key: string;
    value: string;
    label: string;
  }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select({
  id,
  label,
  size,
  className,
  disabled,
  options,
  onChange,
  ...props
}: SelectProps) {
  return (
    <div className={clsx("select-field", className)} data-testid="selectField">
      {label && (
        <Form.Label
          htmlFor={id}
          className="select-field__label"
          data-testid="selectLabel"
        >
          {label}
        </Form.Label>
      )}
      <Form.Select
        id={id}
        size={size}
        disabled={disabled}
        className="select-field__select"
        data-testid="select"
        onChange={onChange}
        {...props}
      >
        {options.map(({ key, value, label }) => (
          <option key={key} value={value}>
            {label}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

export default Select;
