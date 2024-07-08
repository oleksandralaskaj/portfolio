import {Section} from "./Section.tsx";
import {ProjectPreview} from "./ProjectPreview.tsx";
import {LinkButton} from "./LinkButton.tsx";
import {MoveUpRight} from "lucide-react";
import {SectionHeader} from "./SectionHeader.tsx";
import styles from "./Projects.module.scss";

export const Projects = () => {
    return <Section className={styles.container} id={'projects'}>
        <SectionHeader title={'Projects'}
                       subtitle={'Here are a couple of recent project demonstrating my skills in web development and UX design fields'}
                       reverse={'reverse'}/>
        <ProjectPreview title={'Floor planner app'}
                        subtitle={"An app created for real estate agents and home owner, that seek accurate representation of property without unneeded technicalities."}
                        imgBigUrl={''}
                        imgSmallUrl={''}
                        btns={<>
                            <LinkButton to={''}>
                                <MoveUpRight/>Github
                            </LinkButton>
                            <LinkButton to={''}>
                                <MoveUpRight/>Real thing
                            </LinkButton>
                            <LinkButton to={''}>
                                <MoveUpRight/>Figma Project
                            </LinkButton>
                        </>}
                        stack={<>
                            <img src="/images/logo-react.svg" alt="react-logo"/>
                            <img src="/images/logo-typescript.svg" alt="typescript-logo"/>
                            <img src="/images/logo-laravel.svg" alt="laravel-logo"/>
                            <img src="/images/logo-figma.svg" alt="figma-logo"/>
                        </>}
                        reverse={''}/>
        <ProjectPreview title={'My portfolio'}
                        subtitle={"One place with detailed information about my background and recent projects."}
                        imgBigUrl={''}
                        imgSmallUrl={''}
                        btns={<>
                            <LinkButton to={'https://github.com/oleksandralaskaj/portfolio'}>
                                <MoveUpRight/>Github
                            </LinkButton>
                            <LinkButton
                                to={'https://www.figma.com/proto/kwmqoJ6YDZgIByMfGiBeHw/Portfolio?node-id=1-2&t=qBMIfWxTLxf3nXO7-1'}>
                                <MoveUpRight/>Figma Project
                            </LinkButton>
                        </>}
                        stack={<>
                            <img src="/images/logo-react.svg" alt="react-logo"/>
                            <img src="/images/logo-typescript.svg" alt="typescript-logo"/>
                            <img src="/images/logo-figma.svg" alt="figma-logo"/>
                        </>}
                        reverse={'reverse'}/>
        <ProjectPreview title={'Label beauty website'}
                        subtitle={"A platform shared by beauty salon and skincare e-shop under umbrella of Label Beauty. Concept, web is  currently under development."}
                        imgBigUrl={'/images/label_beauty_title_img.png'}
                        imgSmallUrl={'/images/label_beauty_mood.jpg'}
                        btns={<>
                            <LinkButton
                                to={'https://www.figma.com/proto/QeqPBGaeX92Arg8sIlDwgE/labelbeauty.cz?node-id=0-1&t=tQIcCxQRM3bZEj8Q-1'}>
                                <MoveUpRight/>Figma Project
                            </LinkButton>
                        </>}
                        stack={<>
                            <img src="/images/logo-figma.svg" alt="figma-logo"/>
                        </>}
                        reverse={''}/>
    </Section>
}