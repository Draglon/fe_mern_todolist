"use client";
import { Container } from "react-bootstrap";

import GuestHeader from "@/views/layouts/headers/GuestHeader";

type Props = {
  children: React.ReactNode;
};

const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <GuestHeader />
      <Container fluid className="layout">
        <main className="page__main">{children}</main>
      </Container>
    </>
  );
};

export default GuestLayout;
