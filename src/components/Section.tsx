import {ReactNode} from "react";
import styles from './Section.module.scss';

export const Section = ({className, id, children}: { className?: string; children: ReactNode }) => {
    return <div className={`${styles.container} ${className}`} id={id}>
        <div className={styles.content}>
            {children}
        </div>
    </div>
}