import { useEffect } from "react";
import styles from "./project-detail/ProjectDetail.module.scss";
import { Section } from "../components/Section.tsx";
import { Heading } from "../components/Heading.tsx";
import { LinkButton } from "../components/LinkButton.tsx";
import { MoveUpRight } from "lucide-react";
import { Nbsp } from "../components/Nbsp.tsx";
import { ProjectDetailContent } from "./project-detail/ProjectDetailContent.tsx";
import { Contacts } from "../components/Contacts.tsx";

export const FloorPlanner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <Section>
        <Heading
          title={"Floor planner"}
          subtitle={
            "A web application aimed to provide easy tool for drawing floor plans for non-professionals"
          }
          extra={
            <>
              <img src="/images/logo-laravel.svg" alt="laravel-logo" />
              <img src="/images/logo-typescript.svg" alt="ts-logo" />
              <img src="/images/logo-react.svg" alt="react-logo" />
              <LinkButton
                to={"https://github.com/oleksandralaskaj/floor_planner"}
              >
                <MoveUpRight />
                Github
              </LinkButton>
              <LinkButton to={"https://www.laskaj.cz/"}>
                <MoveUpRight />
                Real thing
              </LinkButton>
            </>
          }
          extraStyle={"extra-row-left"}
        />{" "}
        <ProjectDetailContent
          imgMainUrl={"/images/floor_planner_title_detail.png"}
          section1Title={"Observation"}
          section1Url={"/images/floor_planner_problem.png"}
          section1Text={
            <>
              The concept for the floor planner app arose when I observed that a
              significant number of
              <Nbsp />
              properties listed for sale or rent lacked floor plans altogether
              or had them in poor quality. As
              <Nbsp />a<Nbsp />
              customer, I find well-illustrated floor plans crucial.
            </>
          }
          section2Title={"insight"}
          section2Url={"/images/floor_planner_ambition.png"}
          section2Text={
            <>
              This led me to wonder why real estate agents don’t consistently
              include them. Research revealed that there are only a few free,
              user-friendly tools available that produce accurate and
              professional results without requiring installation. So I decided
              to make it as my final project for web development bootcamp.
            </>
          }
          feat1text={"User database and authentication system"}
          feat2text={"Drag-n-drop with snapping to grid functionality"}
          feat3text={
            "Resizable object with rotation ability, calculation of size"
          }
          feat4text={"User projects management including export"}
          feat1url={"/images/floor_planner_auth.png"}
          feat2url={"/images/floor_planner_dnd.png"}
          feat3url={"/images/floor_planner_resize.png"}
          feat4url={"/images/floor_planner_projects.png"}
        />
        <div className={styles.btns}>
          <LinkButton to={"https://www.laskaj.cz/"}>
            <MoveUpRight />
            Real thing
          </LinkButton>
          <LinkButton to={"https://github.com/oleksandralaskaj/floor_planner"}>
            <MoveUpRight />
            Github
          </LinkButton>
        </div>
      </Section>
      <Contacts />
    </div>
  );
};
