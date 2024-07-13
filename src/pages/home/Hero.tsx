import {Section} from "../../components/Section.tsx";
import {Heading} from "../../components/Heading.tsx";
import {LinkButton} from "../../components/LinkButton.tsx";
import styles from './Hero.module.scss'
import {ArrowDownToLine, AtSign, MoveUpRight} from "lucide-react";

export const Hero = () => {
    return <Section className={styles.container} id={'hero'}>
        <Heading title={"Hello, I'm Sasha"} subtitle={'Junior full-stack web developer with graphic design background'}
                 extra={<>
                     <LinkButton to={'https://github.com/oleksandralaskaj'}>
                         <MoveUpRight/>Github
                     </LinkButton>
                     <LinkButton to='/' hash="#contacts">
                         <AtSign/>Contacts
                     </LinkButton>
                     <LinkButton to="/files/valko_oleksandra_cv_en_cz_developer.pdf" download={true}>
                         <ArrowDownToLine/> Download CV
                     </LinkButton>
                 </>
                 } extraStyle={'extra-col-right'}/>
    </Section>
}