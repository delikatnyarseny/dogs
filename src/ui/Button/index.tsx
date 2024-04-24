import cn from "classnames";
import Link from "next/link";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { StyledButton } from "./styled";

interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  href?: string;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ size = "md", href, children, className, type, onClick }) => {
  const buttonClassName = cn(className, {
    Button_small: size === "sm",
    Button_medium: size === "md",
    Button_large: size === "lg",
    Button_xl: size === "xl",
    Button_xxl: size === "xxl",
  });

  if (!href) {
    return (
      <StyledButton type={type} className={buttonClassName} onClick={onClick}>
        {children}
      </StyledButton>
    );
  }

  return (
    <Link href={href}>
      <StyledButton as="div" className={buttonClassName}>
        {children}
      </StyledButton>
    </Link>
  );
};
