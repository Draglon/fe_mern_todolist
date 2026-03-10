"use client";
import { useTranslations, useLocale } from "next-intl";
import { Row, Col } from "react-bootstrap";

import { redirect } from "@/i18n/navigation";
import { loginRoute } from "@/lib/routes";
import { useAppDispatch } from "@/store/hooks";
import { logout as logoutAction } from "@/store/auth/actions";
import { resetTodoList as resetTodoListAction } from "@/store/todoList/actions";
import Button from "@/views/shared/bootstrap/Button";

const UserHeader = () => {
  const tShared = useTranslations("shared");
  const locale = useLocale();
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logoutAction());
    dispatch(resetTodoListAction());
    localStorage.removeItem("token");
    redirect({ href: loginRoute, locale });
  };

  return (
    <header className="header">
      <Row>
        <Col lg="12" className="text-right">
          <Button onClick={onLogout}>
            {tShared("logout")}
          </Button>
        </Col>
      </Row>
    </header>
  );
};

export default UserHeader;
