import styles from "./SectionHeader.module.scss";
import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: ReactNode;
  reverse?: boolean;
};

export const SectionHeader = ({ title, subtitle, reverse = false }: Props) => {
  return (
    <div className={`${styles.basic} ${reverse && styles.reverse}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};
