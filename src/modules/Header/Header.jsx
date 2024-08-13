import styles from "./header.module.css";
import PropTypes from "prop-types";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiHamburgerFill } from "react-icons/pi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Header = ({ modalIsOpen }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };
  const isModal = modalIsOpen;

  return (
    <header
      className={styles.headerFirstDiv}
      style={{ position: isModal ? "absolute" : "fixed" }}
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
                <a className={styles.navAncor} href="#Menu">
                  Menu
                </a>
              </li>

              <li className={styles.navItem}>
                <a className={styles.navAncor} href="#Reservation">
                  Reservation
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navAncor} href="#AboutUs">
                  About us
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.navAncor} href="#Comments">
                  Comments
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
            <div>
              <IoMdClose className={styles.close} onClick={closeBurgerMenu} />
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
          </div>
          <a href="tel:+1234567890" className={styles.phoneNumber}>
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
};

export default Header;
