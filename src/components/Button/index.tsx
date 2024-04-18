import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { StyledButton } from "./styled";
import cn from "classnames";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export const Button: FC<ButtonProps> = ({
  size = "md",
  href,
  children,
  className,
  type,
}) => {
  const buttonClassName = cn(className, {
    Button_small: size === "sm",
    Button_medium: size === "md",
    Button_large: size === "lg",
  });

  if (!href) {
    return (
      <StyledButton type={type} className={buttonClassName}>
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
