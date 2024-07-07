import {Section} from "./Section.tsx";
import {Heading} from "./Heading.tsx";
import {LinkButton} from "./LinkButton.tsx";
import styles from './Hero.module.scss'

export const Hero = () => {
    return <Section className={styles.container}>
        <Heading title={"Hello, I'm Sasha"} subtitle={'Junior full-stack web developer with graphic design background'}
                 extra={<>
                     <LinkButton to={'https://github.com/oleksandralaskaj'}>Github</LinkButton>
                     <LinkButton to='/' hash="#contact">Contact</LinkButton>
                     <LinkButton to="/files/valko_oleksandra_cv_en_cz_developer.pdf" download={true}>Download
                         CV</LinkButton>
                 </>
                 }/>
    </Section>
}