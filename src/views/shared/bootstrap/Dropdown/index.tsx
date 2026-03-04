"use client";
import clsx from "clsx";
import React from "react";
import {
  Dropdown as bootstrapDropdown,
  SplitButton as BootstrapSplitButton,
} from "react-bootstrap";

type DropdownProps = {
  id?: string;
  items: any[];
  placement?:
    | "auto"
    | "auto-start"
    | "auto-end"
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "right-start"
    | "right-end"
    | "left-start"
    | "left-end";
  drop?: "up" | "up-centered" | "start" | "end" | "down" | "down-centered";
  variant?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
  className?: string;
  onSelect?: () => void;
  onToggle?: () => void;
  title: React.ReactNode;
  children?: React.ReactNode;
};

function Dropdown({
  title,
  drop = "down",
  variant = "primary",
  items,
  className,
  children,
  ...props
}: DropdownProps) {
  return (
    <BootstrapSplitButton
      title={title}
      drop={drop}
      className={clsx("dropdown", className)}
      variant={variant}
      {...props}
    >
      {children && children}
      {items.map((item) => (
        <>
          {item?.devider ? (
            <bootstrapDropdown.Divider />
          ) : (
            <bootstrapDropdown.Item eventKey={item.id}>
              {item.label}
            </bootstrapDropdown.Item>
          )}
        </>
      ))}
    </BootstrapSplitButton>
  );
}

export default Dropdown;
