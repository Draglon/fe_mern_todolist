"use client";
import { Trash } from "react-bootstrap-icons";

import Button from "@/views/shared/bootstrap/Button";

type RemoveButtonProps = {
  onClick: () => void;
};

const RemoveButton = ({ onClick }: RemoveButtonProps) => {
  return (
    <Button
      className="btn-remove"
      variant="link"
      onClick={onClick}
      data-testid="btnRemove"
    >
      <Trash className="icon-remove" size="14" />
    </Button>
  );
};

export default RemoveButton;
