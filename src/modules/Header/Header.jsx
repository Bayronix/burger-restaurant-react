import styles from "./header.module.css";
import { MdFoodBank } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiHamburgerFill } from "react-icons/pi";
import { useState } from "react";

const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };
  const handleViewMenuClick = () => {
    const menuSection = document.getElementById("Menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.headerFirstDiv}>
      <div className={styles.content}>
        <div className={styles.headerDiv}>
          <PiHamburgerFill
            className={styles.headerLogo}
            style={{ color: "#ff7300d4" }}
            aria-label="Main Logo"
          />
          <nav className={styles.headerNav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a className={styles.navAncor} href="#Menu">
                  Menu
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navAncor} href="#AboutUs">
                  About us
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navAncor} href="#Reservation">
                  Reservation
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.burgerIcon} onClick={toggleBurgerMenu}>
            <RxHamburgerMenu
              className={styles.burgerIcon}
              style={{ color: "#ff7300d4" }}
              aria-label="Hamburger Menu"
            />
          </div>
          <div
            className={`${styles.burgerMenu} ${
              isBurgerMenuOpen ? "" : styles.hidden
            }`}
          >
            <nav className={styles.burgerNav}>
              <ul>
                <li>
                  <a
                    href="#Menu"
                    className={styles.navLink}
                    onClick={closeBurgerMenu}
                  >
                    Menu
                  </a>
                </li>
                <li>
                  <a
                    href="#AboutUs"
                    className={styles.navLink}
                    onClick={closeBurgerMenu}
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#Reservation"
                    className={styles.navLink}
                    onClick={closeBurgerMenu}
                  >
                    Reservation
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <a href="tel:+1234567890" className={styles.phoneNumber}>
            +1 (234) 567-890
          </a>
        </div>
        <div className={styles.divViewHeader}>
          <h1 className={styles.viewHeaderText}>
            Welcome to <b>Flame & Bun!</b>
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
      </div>
    </header>
  );
};

export default Header;
