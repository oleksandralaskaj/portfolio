import { Section } from "../../components/Section.tsx";
import { ProjectPreview } from "./ProjectPreview.tsx";
import { LinkButton } from "../../components/LinkButton.tsx";
import { MoveUpRight } from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader.tsx";
import { Nbsp } from "../../components/Nbsp.tsx";
import styles from "./Projects.module.scss";

export const Projects = () => {
  return (
    <Section className={styles.container} id={"projects"}>
      <SectionHeader
        title={"Projects"}
        subtitle={
          <>
            Here is a<Nbsp />
            couple of
            <Nbsp />
            projects from both web development and UX design field, which I
            <Nbsp />
            recently had a chance to
            <Nbsp />
            work
            <Nbsp />
            on.
          </>
        }
      />
      <ProjectPreview
        title={"Floor planner app"}
        subtitle={
          <>
            An app created for
            <Nbsp />
            real estate agents and home owner, that
            <Nbsp />
            seek accurate representation of
            <Nbsp />
            property without unneeded technicalities.
          </>
        }
        imgBigUrl={"/images/floor_planner_title.png"}
        imgSmallUrl={"/images/floor_planner_secondary.png"}
        btns={
          <>
            <LinkButton
              to={
                "https://github.com/oleksandralaskaj/web_dev_bootcamp/tree/main/FLOOR_PLANNER_APP"
              }
            >
              <MoveUpRight />
              Github
            </LinkButton>
            <LinkButton to={""}>
              <MoveUpRight />
              Real thing
            </LinkButton>
            {/*<LinkButton to={''}>*/}
            {/*    <MoveUpRight/>Figma Project*/}
            {/*</LinkButton>*/}
          </>
        }
        stack={
          <>
            <img src="/images/logo-react.svg" alt="react-logo" />
            <img src="/images/logo-typescript.svg" alt="typescript-logo" />
            <img src="/images/logo-laravel.svg" alt="laravel-logo" />
            {/*<img src="/images/logo-figma.svg" alt="figma-logo"/>*/}
          </>
        }
      />
      <ProjectPreview
        title={"My portfolio"}
        subtitle={
          "One place with detailed information about my background and recent projects."
        }
        imgBigUrl={"/images/my_portfolio_title.jpg"}
        imgSmallUrl={"/images/my_portfolio_secondary.png"}
        btns={
          <>
            <LinkButton to={"https://github.com/oleksandralaskaj/portfolio"}>
              <MoveUpRight />
              Github
            </LinkButton>
            <LinkButton
              to={
                "https://www.figma.com/proto/kwmqoJ6YDZgIByMfGiBeHw/Portfolio?node-id=1-2&t=qBMIfWxTLxf3nXO7-1"
              }
            >
              <MoveUpRight />
              Figma Project
            </LinkButton>
          </>
        }
        stack={
          <>
            <img src="/images/logo-react.svg" alt="react-logo" />
            <img src="/images/logo-typescript.svg" alt="typescript-logo" />
            <img src="/images/logo-figma.svg" alt="figma-logo" />
          </>
        }
        reverse
      />
      <ProjectPreview
        title={"Label beauty website"}
        subtitle={
          <>
            A platform shared by
            <Nbsp />
            beauty salon and skincare e-shop under umbrella of
            <Nbsp />
            Label Beauty. Concept, web is
            <Nbsp />
            currently under development.
          </>
        }
        imgBigUrl={"/images/label_beauty_title_img.png"}
        imgSmallUrl={"/images/label_beauty_mood.jpg"}
        btns={
          <>
            <LinkButton
              to={
                "https://www.figma.com/proto/QeqPBGaeX92Arg8sIlDwgE/labelbeauty.cz?node-id=0-1&t=tQIcCxQRM3bZEj8Q-1"
              }
            >
              <MoveUpRight />
              Figma Project
            </LinkButton>
          </>
        }
        stack={
          <>
            <img src="/images/logo-figma.svg" alt="figma-logo" />
          </>
        }
      />
    </Section>
  );
};
