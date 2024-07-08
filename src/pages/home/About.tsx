import {Section} from "../../components/Section.tsx";
import styles from './About.module.scss';
import {SectionHeader} from "../../components/SectionHeader.tsx";
import {ExperienceItem} from "./ExperienceItem.tsx";

export const About = () => {
    return <Section className={styles.container} id={'about'}>
        <SectionHeader title={"About me"}
                       subtitle={'Practically and academically, I was gaining new knowledge and skills, that shape me as a professional. I’m always eager to continuously learn and grow in my field.'}
                       reverse={'reverse'}/>
        <div className={styles.main}>
            <div className={styles.half}>
                <ExperienceItem
                    start={'04/24'}
                    end={'07/24'}
                    place={'Data4You z.s. ------- bootcamp'}
                    position={"Web Development"}
                    extra={<p>HTML, CSS, SCSS, JS, React, PHP, Laravel, MySQL</p>}/>
                <ExperienceItem
                    start={'09/19'}
                    end={'06/23'}
                    place={'University of Economics and Management, Prague ------- master’s degree program'}
                    position={"Arts management"}
                    extra={<p>minor field: Commercial communication</p>}/>
                <ExperienceItem
                    start={'09/16'}
                    end={'06/19'}
                    place={'University of Economics and Management, Prague ------- master’s degree program'}
                    position={"Multimedia in economic practice"}
                    extra={<p>creative crafts, management in creative fields</p>}/>
            </div>
            <div className={styles.half}>
                <ExperienceItem
                    start={'06/21'}
                    end={'11/22'} place={'Alza.cz a.s. ------- private labels department'}
                    position={"Graphic Designer"}
                    extra={
                        <ul>
                            <li>visual assets for online presentation of whole brand portfolio,</li>
                            <li>management and art direction of photography commissions,</li>
                            <li>implementation of projects aimed to improve team cooperation,</li>
                            <li>creation of graphic standard manual and documentation</li>
                        </ul>
                    }/>
                <ExperienceItem
                    start={'06/21'}
                    end={'11/22'} place={'Commerzbank AG '}
                    position={"Graphic Designer"}
                    extra={
                        <ul>
                            <li>banner and layout design for internal systems, </li>
                            <li>creation and redesign of graphic production for internal and external company representation</li>
                        </ul>
                    }/>
            </div>
        </div>
    </Section>
}