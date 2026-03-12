"use client";
import { useTranslations } from "next-intl";
import { Container, Row, Col } from "react-bootstrap";

import { usePathname } from "@/i18n/navigation";
import { loginRoute, registrationRoute } from "@/lib/routes";
import NavigationLink from "@/views/shared/NavigationLink";
import Button from "@/views/shared/bootstrap/Button";

const GuestHeader = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <header className="header">
      <Container fluid>
        <Row>
          <Col col="12" className="text-right">
            {pathname !== loginRoute && (
              <NavigationLink href={loginRoute}>
                <Button variant="link" dataTestId="btnLogIn" dataCy="btn-log-in">{t("shared.logIn")}</Button>
              </NavigationLink>
            )}
            {pathname !== registrationRoute && (
              <NavigationLink href={registrationRoute}>
                <Button variant="link" dataTestId="btnSignUp" dataCy="btn-sign-up">{t("shared.signUp")}</Button>
              </NavigationLink>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default GuestHeader;
