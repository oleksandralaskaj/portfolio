import {ReactNode} from "react";
import styles from './ProjectPreview.module.scss'

type Props = {
    title: string;
    subtitle: ReactNode;
    imgBigUrl: string;
    imgSmallUrl: string;
    btns: ReactNode;
    stack: ReactNode;
    reverse?: boolean}
export const ProjectPreview = ({title, subtitle, imgBigUrl, imgSmallUrl, btns, stack, reverse = false}: Props) => {

    return <div className={`${styles.content} ${reverse && styles.reverse}`}>
        <img src={imgBigUrl} alt="project-photo" className={styles.imgBig}/>
        <img src={imgSmallUrl} alt="project-photo" className={styles.imgSmall}/>
        <div className={styles.heading}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.btns}>{btns}</div>
        </div>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.stack}>{stack}</div>
    </div>
}