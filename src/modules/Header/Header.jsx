import styles from "./header.module.css";
import PropTypes from "prop-types";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiHamburgerFill } from "react-icons/pi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Auth from "../../auth/auth";
import { NavLink } from "react-router-dom";

const Header = ({ modalIsOpen }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  return (
    <header
      className={`${styles.headerFirstDiv} ${
        modalIsOpen ? styles.headerNoBackground : ""
      }`}
      style={{ position: modalIsOpen ? "absolute" : "fixed" }}
    >
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
                <NavLink to="/OurMenu" className={styles.navAncor}>
                  Menu
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink to="/Reservation" className={styles.navAncor}>
                  Reservation
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <a href="#Comments" className={styles.navAncor}>
                  Comments
                </a>
              </li>
              <li className={styles.navItem}></li>
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
            <div>
              <IoMdClose className={styles.close} onClick={closeBurgerMenu} />
              <nav className={styles.burgerNav}>
                <ul>
                  <li>
                    <NavLink
                      to="/OurMenu"
                      className={styles.navLink}
                      onClick={closeBurgerMenu}
                    >
                      Menu
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Reservation"
                      className={styles.navLink}
                      onClick={closeBurgerMenu}
                    >
                      Reservation
                    </NavLink>
                  </li>
                  <li>
                    <a href="#Comments" className={styles.navLink}>
                      Comments
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <Auth />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
};

export default Header;
