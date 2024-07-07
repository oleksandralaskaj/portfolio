import styles from './Heading.module.scss'

export const Heading = ({title, subtitle, extra}) => {
    return <>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.bottom}>
            <p className={styles.subtitle}>{subtitle}</p>
            <div className={styles.extra}>{extra}</div>
        </div>
    </>
}