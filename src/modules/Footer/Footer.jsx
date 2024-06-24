import styles from "./footer.module.css";
import { CiMenuBurger } from "react-icons/ci";

const Footer = () => {
  return (
    <header>
      <div className={styles.headerFirstDiv}>
        <div className={styles.headerDiv}>
          <CiMenuBurger className={styles.headerLogo} />

          <a href="tel:+1234567890" className={styles.phoneNumber}>
            +1 (234) 567-890
          </a>
          <button type="button" className={styles.reservationButton}>
            Table Reservation
          </button>
        </div>
      </div>
    </header>
  );
};

export default Footer;
