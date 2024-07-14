import styles from "./ProjectDetailContent.module.scss";
import { PointHeader } from "./PointHeader.tsx";
import { Text } from "../../components/Text.tsx";
import { Image } from "../../components/Image.tsx";

type Props = {
  imgMainUrl: string;
  section1Title: string;
  section1Text: string;
  section1Url: string;
  section2Title: string;
  section2Text: string;
  section2Url: string;
  feat1text: string;
  feat2text: string;
  feat3text: string;
  feat4text: string;
  feat1url: string;
  feat2url: string;
  feat3url: string;
  feat4url: string;
};
export const ProjectDetailContent = ({
  imgMainUrl,
  section1Title,
  section1Text,
  section1Url,
  section2Title,
  section2Url,
  section2Text,
  feat1text,
  feat2text,
  feat3text,
  feat4text,
  feat1url,
  feat2url,
  feat3url,
  feat4url,
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
          <Image src={section1Url} alt={"first-point"} />
        </div>
        <div className={styles.pointTwoText}>
          <PointHeader number={"/02"} title={section2Title} />
          <Text>{section2Text}</Text>
        </div>
        <div className={styles.section2Img}>
          <Image src={section2Url} alt={"second-point"} />
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.featuresHeader}>
          <PointHeader number={"/03"} title={"Features"} />
        </div>
        <div className={styles.featItems}>
          <div className={styles.featItem1}>
            <Image src={feat1url} alt="feature-1" />
            <Text>→ {feat1text}</Text>
          </div>
          <div className={styles.featItem2}>
            <Image src={feat2url} alt="feature-2" />
            <Text>→ {feat2text}</Text>
          </div>
          <div className={styles.featItem3}>
            <Image src={feat3url} alt="feature-3" />
            <Text>→ {feat3text}</Text>
          </div>
          <div className={styles.featItem4}>
            <Image src={feat4url} alt="feature-4" />
            <Text>→ {feat4text}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
