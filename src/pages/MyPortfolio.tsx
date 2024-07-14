import { ProjectDetailContent } from "./project-detail/ProjectDetailContent.tsx";
import { LinkButton } from "../components/LinkButton.tsx";
import { MoveUpRight } from "lucide-react";
import { Heading } from "../components/Heading.tsx";
import styles from "./project-detail/ProjectDetail.module.scss";
import { Section } from "../components/Section.tsx";
import { Contacts } from "../components/Contacts.tsx";

export const MyPortfolio = () => {
  return (
    <div className={styles.container}>
      <Section>
        <Heading
          title={"my portfolio page"}
          subtitle={
            "The project, which integrates development and design, serves as an extension of my curriculum vitae. It provides detailed information about my background and recent projects."
          }
          extra={
            <>
              <img src="/images/logo-figma.svg" alt="figma-logo" />
              <img src="/images/logo-typescript.svg" alt="ts-logo" />
              <img src="/images/logo-react.svg" alt="react-logo" />
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
          extraStyle={"extra-row-left"}
        />{" "}
        <ProjectDetailContent
          imgMainUrl={"/images/my_portfolio_title_detail.jpg"}
          section1Title={"Projects"}
          section1Url={"/images/my_portfolio_projects.jpg"}
          section1Text={
            "The Projects section provides a quick glimpse of recent work across various disciplines. Clicking on a project takes the user to a detailed page with specific information about that project."
          }
          section2Title={"education and experience"}
          section2Url={"/images/my_portfolio_work.jpg"}
          section2Text={
            "Discover my diverse journey—from graphic design to programming, management, marketing, and advertising. This section provides an overview of my achievements and highlights core professional traits."
          }
          feat1text={"created with React and TypeScript"}
          feat2text={"light/dark mode switch"}
          feat3text={"deployed on Netlify"}
          feat4text={"mobile first"}
          feat1url={"/images/my_portfolio_ts_react.png"}
          feat2url={"/images/my_portfolio_modes.png"}
          feat3url={"/images/my_portfolio_netlify.jpg"}
          feat4url={"/images/my_portfolio_mobile_first.jpg"}
        />
      </Section>
      <Contacts />
    </div>
  );
};
