import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
export const Button = ({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button {...rest} className={styles.button}>
      {children}
    </button>
  );
};
