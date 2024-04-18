import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

import { PATHS } from "@/constants/paths";
import { Logo } from "@/icons/Logo";

import { StyledHeader } from "./styled";

export const Header: FC = () => {
  const { asPath } = useRouter();

  return (
    <StyledHeader>
      <Link href="/">
        <Logo className="header-logo" />
      </Link>

      <nav className="header-nav">
        <ul className="header-nav__list">
          {PATHS.map(({ label, link }) => (
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
