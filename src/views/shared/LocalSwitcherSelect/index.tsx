"use client";
import { routing } from "@/i18n/routing";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Form from "react-bootstrap/Form";

const LocaleSwitcherSelect = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onChangeLocation = (e: React.FormEvent<HTMLSelectElement>) => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error:next-line
        { pathname, params },
        // @ts-expect-error:next-line
        { locale: e.target.value }
      );
    });
  };

  return (
    <Form.Select
      className="locale-switcher"
      value={locale}
      disabled={isPending}
      size="lg"
      onChange={onChangeLocation}
    >
      {routing.locales.map((cur: string) => (
        <option key={cur} value={cur}>
          {t("LocaleSwitcher.locale", { locale: cur })}
        </option>
      ))}
    </Form.Select>
  );
};

export default LocaleSwitcherSelect;
