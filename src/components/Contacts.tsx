import {Section} from "./Section.tsx";
import styles from "./Contacts.module.scss"
import {Link} from "./Link.tsx";
import {ArrowDownToLine, MoveUpRight} from "lucide-react";

export const Contacts = () => {
    return <Section className={styles.container} id={'contacts'}>
        <h1>Contacts</h1>
        <div className={styles.content}>
            <div>
                <h5 className={styles.subtitle}>E-mail</h5>
                <p>alexandravalko@gmail.com</p>
            </div>
            <div>
                <h5 className={styles.subtitle}>Phone</h5>
                <p>+420 774 586 186</p>
            </div>
            <Link to={'https://github.com/oleksandralaskaj'}>
                <h5 className={styles.subtitle}>Github <MoveUpRight/></h5>
            </Link>
            <Link to={'https://www.linkedin.com/in/oleksandra-valko/'}>
                <h5 className={styles.subtitle}>Linkedin <MoveUpRight/></h5>
            </Link>
            <Link to={"/files/valko_oleksandra_cv_en_cz_developer.pdf"} download={true}>
                <h5 className={styles.subtitle}>Download CV <ArrowDownToLine/></h5>
            </Link>
        </div>
    </Section>
}