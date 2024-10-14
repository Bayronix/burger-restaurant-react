import { MdOutlineFastfood } from "react-icons/md";
import { useTranslation } from "react-i18next";
import styles from "./about-us.module.css";

const AboutUs = () => {
  const { t } = useTranslation(); 

  return (
    <section id="AboutUs">
      <ul className={styles["about-u-list"]}>
        <li className={styles["about-u-item"]}>
          <MdOutlineFastfood className={styles["about-u-icon"]} />
          <h3 className={styles["about-u-title"]}>{t('aboutUs.exquisiteCuisine')}</h3>
          <p className={styles["about-u-description"]}>
            {t('aboutUs.exquisiteCuisineDescription')}
          </p>
        </li>

        <li className={styles["about-u-item"]}>
          <MdOutlineFastfood className={styles["about-u-icon"]} />
          <h3 className={styles["about-u-title"]}>{t('aboutUs.bestQualityFood')}</h3>
          <p className={styles["about-u-description"]}>
            {t('aboutUs.bestQualityFoodDescription')}
          </p>
        </li>

        <li className={styles["about-u-item"]}>
          <MdOutlineFastfood className={styles["about-u-icon"]} />
          <h3 className={styles["about-u-title"]}>{t('aboutUs.affordableFood')}</h3>
          <p className={styles["about-u-description"]}>
            {t('aboutUs.affordableFoodDescription')}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
