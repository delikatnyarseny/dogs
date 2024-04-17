import { Logo } from "@/icons/Logo";
import { FC } from "react";
import { StyledHeader } from "./styled";

interface Props {}

const navigationItems = [
  { label: "Home", link: "/" },
  { label: "Info", link: "/" },
  { label: "Spa Services", link: "/" },
  { label: "Book Apointment", link: "/" },
  { label: "Blog", link: "/" },
  { label: "About us", link: "/" },
  { label: "Contact us", link: "/" },
];

export const Header: FC<Props> = () => {
  return (
    <StyledHeader>
      <Logo />

      <nav>
        <ul>
          {navigationItems.map(({ label, link }) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
};
