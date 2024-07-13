import { ButtonHTMLAttributes } from "react";

export const Button = ({
  onClick,
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button onClick={onClick}>{children}</button>;
};
