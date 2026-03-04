"use client";
import { useTranslations, useLocale } from "next-intl";
import { Form } from "react-bootstrap";
import { Formik } from "formik";

import useFormSubmit from "@/hooks/shared/form/useFormSubmit";
import { useRouter } from "@/i18n/navigation";
import loginSchema from "@/lib/yupLocalised/schemas/login";
import { useAppSelector } from "@/store/hooks";
import fetchAuth from "@/store/auth/operations/fetchAuth";
import { isLoadingSelector } from "@/store/auth/selectors";
import InputField from "@/views/shared/InputField";
import Button from "@/views/shared/bootstrap/Button";

const LoginForm = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const isLoading = useAppSelector(isLoadingSelector);
  const onSubmit = useFormSubmit(fetchAuth, { locale, router });

  return (
    <div className="login mx-auto">
      <h1 className="login__title text-center">{t("Login.title")}</h1>
      <Formik
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form className="from login__form" onSubmit={handleSubmit}>
            <InputField
              label={t("shared.email")}
              id="email"
              name="email"
              type="email"
              value={values.email}
              touched={touched.email}
              error={errors.email}
              dataTestId="emailInput"
              onChange={handleChange}
            />
            <InputField
              label={t("shared.password")}
              id="password"
              name="password"
              type="password"
              value={values.password}
              touched={touched.password}
              error={errors.password}
              dataTestId="passwordInput"
              onChange={handleChange}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              data-testid="submitButton"
            >
              {t("shared.logIn")}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
