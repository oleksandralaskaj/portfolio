import {ReactNode} from "react";
import styles from './Section.module.scss';

export const Section = ({className, children}: { className?: string; children: ReactNode }) => {
    return <div className={`${styles.container} ${className}`}>
        <div className={styles.content}>
            {children}
        </div>
    </div>
}