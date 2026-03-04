"use client";
import clsx from "clsx";
import { Alert as BootstrapAlert } from "react-bootstrap";

type AlertProps = {
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";
  children: React.ReactNode;
};

function Alert({
  className,
  children,
  variant = "primary",
  ...props
}: AlertProps) {
  return (
    <BootstrapAlert
      variant={variant}
      className={clsx("alert", className)}
      {...props}
    >
      {children}
    </BootstrapAlert>
  );
}

export default Alert;
