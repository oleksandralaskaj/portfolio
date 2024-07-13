import { ReactNode } from "react";
import styles from "./Image.module.scss";
type Props = {
  src: string;
  alt: string;
};
export const Image = ({ src, alt }: Props): ReactNode => {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};
