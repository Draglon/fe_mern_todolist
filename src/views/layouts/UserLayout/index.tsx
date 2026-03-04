"use client";
import { Container } from "react-bootstrap";

import UserHeader from "@/views/layouts/headers/UserHeader";
import ModalRoot from "@/views/shared/ModalRoot";

type Props = {
  children: React.ReactNode;
};

const UserLayout = ({ children }: Props) => {
  return (
    <>
      <UserHeader />
      <Container fluid className="page__layout">
        <main className="page__main">
          <div className="page_content">{children}</div>
        </main>
        <ModalRoot />
      </Container>
    </>
  );
};

export default UserLayout;
