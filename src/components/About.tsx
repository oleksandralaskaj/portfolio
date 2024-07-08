import {Section} from "./Section.tsx";
import styles from './About.module.scss';
import {SectionHeader} from "./SectionHeader.tsx";

export const About = () => {
    return <Section className={styles.container} id={'about'}>
        <SectionHeader title={"About me"}
                       subtitle={'Practically and academically, I was gaining new knowledge and skills, that shape me as a professional. I’m always eager to continuously learn and grow in my field.'}
                       reverse={'reverse'}/>
    </Section>
}