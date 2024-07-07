import styles from './Heading.module.scss'
import {ReactNode} from "react";
type Props = {
    title: string;
    subtitle: string;
    extra: ReactNode
}
export const Heading = ({title, subtitle, extra}:Props) => {
    return <>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.bottom}>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.extra}>{extra}</div>
        </div>
    </>
}