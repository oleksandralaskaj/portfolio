import styles from "./ProjectDetailContent.module.scss";
import { PointHeader } from "./PointHeader.tsx";
import { Text } from "../../components/Text.tsx";
import { Image } from "../../components/Image.tsx";
import { MoveRight } from "lucide-react";

type Props = {
  imgMainUrl: string;
  section1Title: string;
  section1Text: string;
  section1Url: string;
  section2Title: string;
  section2Text: string;
  section2Url: string;
  feat1: string;
  feat2: string;
  feat3: string;
  feat4: string;
};
export const ProjectDetailContent = ({
  imgMainUrl,
  section1Title,
  section1Text,
  section1Url,
  section2Title,
  section2Url,
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
        <div className={styles.section1Img}>
          <Image src={section1Url} alt={"salon"} />
        </div>
        <div className={styles.pointTwoText}>
          <PointHeader number={"/02"} title={section2Title} />
          <Text>{section2Text}</Text>
        </div>
        <div className={styles.section2Img}>
          <Image src={section2Url} alt={"skincare"} />
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.featuresHeader}>
          <PointHeader number={"/03"} title={"Features"} />
        </div>
        <div className={styles.featItems}>
          <div className={styles.featItem1}>
            <Image src="/images/label_beauty_quiz.png" alt="quiz" />
            <Text>→ {feat1}</Text>
          </div>
          <div className={styles.featItem2}>
            <Image src="/images/label_beauty_e-shop.png" alt="e-shop" />
            <Text>→ {feat2}</Text>
          </div>
          <div className={styles.featItem3}>
            <Image src="/images/label_beauty_services.png" alt="price" />
            <Text>→ {feat3}</Text>
          </div>
          <div className={styles.featItem4}>
            <Image
              src="/images/label_beauty_reservation.png"
              alt="reservation"
            />
            <Text>→ {feat4}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
