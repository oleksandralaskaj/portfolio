import styles from "./PointHeader.module.scss";

type Props = {
  number?: string;
  title: string;
};
export const PointHeader = ({ number, title }: Props) => {
  return (
    <div className={styles.container}>
      <h3>{number}</h3>
      <h3>{title}</h3>
    </div>
  );
};
