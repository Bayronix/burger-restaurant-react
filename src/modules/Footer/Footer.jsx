import styles from "./footer.module.css";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <a href="tel:+1234567890" className={styles.phoneNumber}>
          +1 (234) 567-890
        </a>
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <a href="#Menu" className={styles.navLink}>
                Menu
              </a>
            </li>
            <li>
              <a href="#AboutUs" className={styles.navLink}>
                About Us
              </a>
            </li>
            <li>
              <a href="#Reservation" className={styles.navLink}>
                Reservation
              </a>
            </li>
          </ul>
        </nav>
        <h2 className={styles.footerHeading}>
          Follow Us
          <AiOutlineInstagram className={styles.AiOut} />
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
