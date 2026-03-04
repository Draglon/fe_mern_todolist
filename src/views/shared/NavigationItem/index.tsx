"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";

import NavigationLink from "@/views/shared/NavigationLink";

type NavigationItemProps = {
  className?: string;
  text: string;
  href: string;
};

const NavigationItem = ({ className, text, href }: NavigationItemProps) => {
  const t = useTranslations();

  return (
    <NavigationLink href={href} className={clsx("nav__link", className)}>
      {t(text)}
    </NavigationLink>
  );
};

export default NavigationItem;
