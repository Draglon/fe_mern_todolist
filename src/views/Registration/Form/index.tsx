"use client";
import { useTranslations, useLocale } from "next-intl";
import { Form } from "react-bootstrap";
import { Formik } from "formik";

import { useRouter } from "@/i18n/navigation";
import useFormSubmit from "@/hooks/shared/form/useFormSubmit";
import registrationSchema from "@/lib/yupLocalised/schemas/registration";
import fetchRegister from "@/store/auth/operations/fetchRegister";
import InputField from "@/views/shared/InputField";
import Button from "@/views/shared/bootstrap/Button";

const Registration = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const onSubmit = useFormSubmit(fetchRegister, { locale, router });

  return (
    <div className="signup mx-auto">
      <h1 className="signup__title text-center">{t("Registration.title")}</h1>

      <Formik
        validationSchema={registrationSchema}
        onSubmit={onSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            className="from signup__form"
            noValidate
            onSubmit={handleSubmit}
          >
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
            <Button type="submit" className="w-full" data-testid="submitButton">
              {t("shared.signUp")}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
