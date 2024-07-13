import styles from "./Heading.module.scss";
import { ReactNode } from "react";
type Props = {
  title: string;
  subtitle: string;
  extra?: ReactNode;
  extraStyle: string;
};
export const Heading = ({ title, subtitle, extra, extraStyle }: Props) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.bottom}>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles[extraStyle]}>{extra}</div>
      </div>
    </>
  );
};
