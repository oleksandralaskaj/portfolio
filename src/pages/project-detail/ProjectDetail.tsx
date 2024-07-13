import { Heading } from "../../components/Heading.tsx";
import { MoveUpRight } from "lucide-react";
import { LinkButton } from "../../components/LinkButton.tsx";
import styles from "../project-detail/ProjectDetail.module.scss";

export const ProjectDetail = ({
  headingTitle,
  headingSubtitle,
  headingExtra,
  headingExtraStyle,
}) => {
  return (
    <div className={styles.container}>
      <Heading
        title={headingTitle}
        subtitle={headingSubtitle}
        extra={headingExtra}
        extraStyle={headingExtraStyle}
      />
    </div>
  );
};
