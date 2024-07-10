import styles from "./about-us.module.css";

import { MdOutlineFastfood } from "react-icons/md";
const AboutUs = () => {
  return (
    <section>
      <ul className={styles["about-u-list"]}>
        <li className={styles["about-u-item"]}>
          <MdOutlineFastfood className={styles["about-u-icon"]} />
          <h3 className={styles["about-u-title"]}>Magical Atmosphere</h3>
          <p className={styles["about-u-description"]}>
            In our establishment, there is a magical atmosphere filled with
            delicious aromas.
          </p>
        </li>
        <li className={styles["about-u-item"]}>
          <MdOutlineFastfood className={styles["about-u-icon"]} />
          <h3 className={styles["about-u-title"]}>Best Quality Food</h3>
          <p className={styles["about-u-description"]}>
            The quality of our food is excellent! We source our ingredients from
            the most reputable suppliers.
          </p>
        </li>

        <li className={styles["about-u-item"]}>
          <MdOutlineFastfood className={styles["about-u-icon"]} />
          <h3 className={styles["about-u-title"]}>Affordable Food</h3>
          <p className={styles["about-u-description"]}>
            The cost of our food depends only on its quantity. The quality is
            always top-notch!
          </p>
        </li>
      </ul>
    </section>
  );
};

export default AboutUs;
