import { ProjectDetailContent } from "./project-detail/ProjectDetailContent.tsx";
import { LinkButton } from "../components/LinkButton.tsx";
import { MoveUpRight } from "lucide-react";
import { Heading } from "../components/Heading.tsx";
import styles from "./project-detail/ProjectDetail.module.scss";
import { Section } from "../components/Section.tsx";
import { Contacts } from "../components/Contacts.tsx";

export const LabelBeauty = () => {
  return (
    <div className={styles.container}>
      <Section>
        <Heading
          title={"label beauty"}
          subtitle={
            "UX design project for a concept connecting beauty salon and e-shop with professional skincare."
          }
          extra={
            <>
              <img src="/images/logo-figma.svg" alt="figma-logo" />
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
          feat1text={"online quiz helping to choose right products from e-shop"}
          feat2text={"basic e-shop design"}
          feat3text={"list of procedures with pricing"}
          feat4text={"reservation form for treatment in salon"}
          feat1url={"/images/label_beauty_quiz.png"}
          feat2url={"/images/label_beauty_e-shop.png"}
          feat3url={"/images/label_beauty_services.png"}
          feat4url={"/images/label_beauty_reservation.png"}
        />
      </Section>
      <Contacts />
    </div>
  );
};
