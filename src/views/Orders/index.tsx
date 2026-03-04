"use client";
import { useTranslations } from "next-intl";

const TodoList = () => {
  const t = useTranslations();

  return (
    <div className="page">
      Todo list
    </div>
  );
};

export default TodoList;
