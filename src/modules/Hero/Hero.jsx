import styles from "./Hero.module.css";
import { MdFoodBank } from "react-icons/md";
const handleViewMenuClick = () => {
  const menuSection = document.getElementById("Menu");
  if (menuSection) {
    menuSection.scrollIntoView({ behavior: "smooth" });
  }
};
//  ???????

const Hero = () => {
  return (
    <div className={styles.divViewHeader}>
      <h1 className={styles.viewHeaderText}>
        Welcome to{" "}
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
        View Menu
      </button>
    </div>
  );
};

export default Hero;
