import React from "react";
import styles from "./header.module.css";
import { MdFoodBank } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiHamburgerFill } from "react-icons/pi";

const Header = () => {
  return (
    <header>
      <div className={styles.headerFirstDiv}>
        <div className={styles.headerDiv}>
          <PiHamburgerFill
            className={styles.headerLogo}
            style={{ color: "#d67e35" }}
          />
          <nav className={styles.headerNav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>Home Page</li>
              <li className={styles.navItem}>Menu</li>
              <li className={styles.navItem}>About Us</li>
              <li className={styles.navItem}>Reservation</li>
            </ul>
          </nav>
          <RxHamburgerMenu
            className={styles.headerLogo}
            style={{ color: "#d67e35" }}
          />
          <a href="tel:+1234567890" className={styles.phoneNumber}>
            +1 (234) 567-890
          </a>
          <button type="button" className={styles.reservationButton}>
            Table Reservation
          </button>
        </div>
        <div className={styles.divViewHeader}>
          <h1 className={styles.viewHeaderText}>
            Welcome to <b>Flame & Bun!</b>
            <MdFoodBank className={styles.viewClass} />
          </h1>
          <button type="button" className={styles.viewMenuButton}>
            View Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
