import { useRouter } from "next/router";
import { StyledHeader } from "./styled";
import { Logo } from "@/icons/Logo";
import { FC } from "react";
import cn from "classnames";
import Link from "next/link";
import { PATHS } from "@/constants/paths";

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
