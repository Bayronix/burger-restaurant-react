import { CiBurger } from "react-icons/ci";
import styles from "./BurgerSkills.module.css";

const BurgerTechSkills = () => {
  return (
    <section id="burgerTechSkills" className={styles.techSkills}>
      <div className={styles.ribbonContainer}>
        <div className={styles.ribbon}>
          <div className={styles.skills}>
            <ul className={styles.skillList}>
              {[
                "Beef Patty",
                "Jalapenos",
                "Mushrooms",
                "Pineapple",
                "Red Onion",
                "Secret Sauce",
                "Sesame Seed Bun",
                "Grilled Patty",
                "Avocado",
                "Fried Egg",
                "Bacon",
              ].map((item, index) => (
                <li key={index} className={styles.skillItem}>
                  <CiBurger />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.transparent}>
          <div className={styles.skills}>
            <ul className={styles.skillList}>
              {[
                "Green Onion",
                "Special Gravy",
                "Red Tomato",
                "Fresh Pineapple",
                "White Onion",
                "Secret Recipe Sauce",
                "Wild Mushrooms",
                "Sweet Pickles",
                "Ripe Avocado",
              ].map((item, index) => (
                <li key={index} className={styles.skillItem}>
                  <CiBurger />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BurgerTechSkills;
