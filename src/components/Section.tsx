import { PropsWithChildren } from "react";
import styles from "./Section.module.scss";

type Props = {
  id?: string;
  className?: string;
};
export const Section = ({
  className,
  id,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={`${styles.container} ${className}`} id={id}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
