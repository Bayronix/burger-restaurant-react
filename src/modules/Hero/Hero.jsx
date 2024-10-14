import { useTransition } from "react";
import styles from "./Hero.module.css";
import { MdFoodBank } from "react-icons/md";
import { useTranslation } from "react-i18next";
const handleViewMenuClick = () => {
  const menuSection = document.getElementById("Menu");
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: "smooth" });
  }
};
//  ???????

const Hero = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.divViewHeader}>
      <h1 className={styles.viewHeaderText}>
        {t("welcome")}{" "}
        <b className={styles.b}>
          Flame <span className={styles.spanB}> & </span>Bun!
        </b>
        <MdFoodBank className={styles.viewClass} />
      </h1>
      <button
        type="button"
        className={styles.viewMenuButton}
        onClick={handleViewMenuClick}
      >
        {t("viewBotton")}
      </button>
    </div>
  );
};

export default Hero;
