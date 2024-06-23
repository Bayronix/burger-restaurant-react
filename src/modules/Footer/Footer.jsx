import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <header>
      <div className={styles.headerFirstDiv}>
        <div className={styles.headerDiv}>
          <img
            src="./src/svg/LOGO.svg"
            alt="Logo"
            className={styles.headerLogo}
          />

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
