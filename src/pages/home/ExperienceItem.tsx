import { ReactNode } from "react";
import styles from "./ExperienceItem.module.scss";

type Props = {
  start: string;
  end: string;
  place: string;
  position: string;
  extra: ReactNode;
};
export const ExperienceItem = ({
  start,
  end,
  place,
  position,
  extra,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.dates}>
        <div className={styles.block}></div>
        <div className={styles.numbers}>
          <p>{end}</p>
          <p>—</p>
          <p>{start}</p>
        </div>
      </div>
      <div className={styles.details}>
        <h4>{place}</h4>
        <h3>{position}</h3>
        {extra}
      </div>
    </div>
  );
};
