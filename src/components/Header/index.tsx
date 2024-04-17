import { useRouter } from "next/router";
import { StyledHeader } from "./styled";
import { Logo } from "@/icons/Logo";
import { FC } from "react";
import cn from "classnames";
import Link from "next/link";

interface Props {}

// remove
const navigationItems = [
  { label: "Home", link: "/" },
  { label: "Info", link: "/info" },
  { label: "Spa Services", link: "/spa-services" },
  { label: "Book Apointment", link: "/book-apointment" },
  { label: "Blog", link: "/blog" },
  { label: "About us", link: "/about-us" },
  { label: "Contact us", link: "/contact-us" },
];

export const Header: FC<Props> = () => {
  const { asPath } = useRouter();

  return (
    <StyledHeader>
      <Logo className="header-logo" />

      <nav className="header-nav">
        <ul className="header-nav__list">
          {navigationItems.map(({ label, link }) => (
            <li
              key={label}
              className={cn("header-nav__list-item", {
                "header-nav__list-item__active": link === asPath,
              })}
            >
              <Link href={link}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
};
