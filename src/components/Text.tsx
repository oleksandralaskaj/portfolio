import { ReactNode } from "react";
import styles from "./Text.module.scss";
type Props = {
  children: string | ReactNode;
};
export const Text = ({ children }: Props) => {
  return <p className={styles.text}>{children}</p>;
};
