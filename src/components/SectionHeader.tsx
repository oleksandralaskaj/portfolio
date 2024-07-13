import styles from "./SectionHeader.module.scss";
import {ReactNode} from "react";

type Props = {
    title: string,
    subtitle: ReactNode,
    reverse?: string
}
export const SectionHeader = ({title, subtitle, reverse}: Props) => {
    return <div className={`${styles.basic} ${reverse && styles.reverse}`}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
    </div>
}