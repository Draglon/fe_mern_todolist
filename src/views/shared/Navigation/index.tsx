"use client";
import { Nav } from "react-bootstrap";

import NavigationItem from "@/views/shared/NavigationItem";

type NavigationProps = {
  menu: {
    href: string;
    text: string;
  }[];
};

const Navigation = ({ menu }: NavigationProps) => {
  return (
    <Nav>
      {menu.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </Nav>
  );
};

export default Navigation;
