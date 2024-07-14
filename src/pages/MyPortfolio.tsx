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
          title={"My Portfolio Page"}
          subtitle={
            "The project, which integrates development and design, serves as an extension of my curriculum vitae. It provides detailed information about my background and recent projects."
          }
          extra={
            <>
              <img src="/images/logo-react.svg" alt="react-logo" />
              <img src="/images/logo-typescript.svg" alt="ts-logo" />
              <img src="/images/logo-figma.svg" alt="figma-logo" />
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
          imgMainUrl={"/images/label_beauty_title_detail.png"}
          section1Title={"Client assignment"}
          section1Url={"/images/label_beauty_mood_2.jpg"}
          section1Text={
            "Label Beauty began as a beauty salon in Prague, providing a range of services including aesthetic cosmetology, hair removal, lash extensions, and hand care treatments. Initially focused on social media, the company recognized the necessity for a website with more comprehensive functionality. "
          }
          section2Title={"Double functionality"}
          section2Url={"/images/label_beauty_mood_3.jpg"}
          section2Text={
            "At that point the business model was also expanded by incorporation of an e-commerce platform offering premium cosmetic products. The goal was to merge two businesses into a single entity while maintaining clarity for users regarding the distinction between physical and online services offered by each part of interface."
          }
          feat1={"online quiz helping to choose right products from e-shop"}
          feat2={"basic e-shop design"}
          feat3={"list of procedures with pricing"}
          feat4={"reservation form fon treatment in salon"}
        />
      </Section>
      <Contacts />
    </div>
  );
};
