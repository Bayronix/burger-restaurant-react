
import styles from "./header.module.css";
import PropTypes from "prop-types";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiHamburgerFill } from "react-icons/pi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from 'react-i18next';

const Header = ({ modalIsOpen }) => {
  const { t } = useTranslation(); 
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
              <NavLink
              to="/"
              className={styles.navAncor}
              >
              {t('homePage')} 
               </NavLink>
            </li>
              <li className={styles.navItem}>
                <NavLink to="/OurMenu" className={styles.navAncor}>
                  {t('menu')}
                </NavLink>
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
                    <NavLink
                      to="/"
                      className={styles.navLink}
                      onClick={closeBurgerMenu}
                    >
                      {t('homePage')} 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/OurMenu"
                      className={styles.navLink}
                      onClick={closeBurgerMenu}
                    >
                      {t('menu')} 
                    </NavLink>
                  </li>
                 
                 <li>
             
                 </li>
               
                </ul>
              </nav>
              
            </div>
            
          </div>

      
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
};

export default Header;
