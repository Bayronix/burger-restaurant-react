import styles from "./Hero.module.css";
import { MdFoodBank } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const handleViewMenuClick = () => {
  const menuSection = document.getElementById("Menu");
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.divViewHeader}>
      <h1 className={styles.viewHeaderText}>
        {t("welcome")}{" "}
        <b className={styles.b}>
          Flame <span className={styles.spanB}> & </span>Bun!
        </b>
        <MdFoodBank className={styles.viewClass} />
      </h1>
      <NavLink className={styles.viewMenuButton} to="./OurMenu">
        {t("viewLink")}
        {/* виправити */}
      </NavLink>
    </div>
  );
};

export default Hero;
