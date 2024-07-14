import styles from "./ProjectPreview.module.scss";
import { Image } from "../../components/Image.tsx";
import { TransitiveLink } from "../../components/TransitiveLink.tsx";
import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: ReactNode;
  imgBigUrl: string;
  imgSmallUrl: string;
  to?: string;
  btns: ReactNode;
  stack: ReactNode;
  reverse?: boolean;
};
export const ProjectPreview = ({
  title,
  subtitle,
  imgBigUrl,
  imgSmallUrl,
  to,
  btns,
  stack,
  reverse = false,
}: Props) => {
  return (
    <div className={`${styles.content} ${reverse && styles.reverse}`}>
      <TransitiveLink to={to}>
        <div className={styles.imgBig}>
          <Image src={imgBigUrl} alt="project-photo" />
        </div>
      </TransitiveLink>
      <TransitiveLink to={to}>
        <div className={styles.imgSmall}>
          <Image src={imgSmallUrl} alt="project-photo" />
        </div>
      </TransitiveLink>
      <div className={styles.heading}>
        <TransitiveLink to={to}>
          <h3 className={styles.title}>{title}</h3>
        </TransitiveLink>
        <div className={styles.btns}>{btns}</div>
      </div>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.stack}>{stack}</div>
    </div>
  );
};
