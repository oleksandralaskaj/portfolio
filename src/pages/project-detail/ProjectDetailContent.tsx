import styles from "./ProjectDetailContent.module.scss";
import { PointHeader } from "./PointHeader.tsx";
import { Text } from "../../components/Text.tsx";
import { Image } from "../../components/Image.tsx";

type Props = {
  imgMainUrl: string;
  section1Title: string;
  section1Text: string;
  section2Title: string;
  section2Text: string;
  feat1: string;
  feat2: string;
  feat3: string;
  feat4: string;
};
export const ProjectDetailContent = ({
  imgMainUrl,
  section1Title,
  section1Text,
  section2Title,
  section2Text,
  feat1,
  feat2,
  feat3,
  feat4,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.points}>
        <div className={styles.imgMain}>
          <Image src={imgMainUrl} alt="main" />
        </div>
        <div className={styles.pointOneText}>
          <PointHeader number={"/01"} title={section1Title} />
          <Text>{section1Text}</Text>
        </div>
        <div className={styles.pointTwoText}>
          <PointHeader number={"/02"} title={section2Title} />
          <Text>{section2Text}</Text>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.featuresHeader}>
          <PointHeader number={"/03"} title={"Features"} />
        </div>
        <div className={styles.featImg}>
          <Image src="/images/label_beauty_quiz.png" alt="quiz" />
          <Image src="/images/label_beauty_e-shop.png" alt="e-shop" />
          <Image src="/images/label_beauty_services.png" alt="price" />
          <Image src="/images/label_beauty_reservation.png" alt="reservation" />
        </div>
        <div className={styles.featTexts}>
          <Text>{feat1}</Text>
          <Text>{feat2}</Text>
          <Text>{feat3}</Text>
          <Text>{feat4}</Text>
        </div>
      </div>
    </div>
  );
};
