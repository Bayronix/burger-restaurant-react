import styles from "./footer.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDiv}>
        <h3 className={styles.contactFooter}>Contact with us</h3>

        <nav className={styles.footerNav}>
          <ul>
            <li>
              <a href="tel:+1234567890" className={styles.phoneNumber}>
                +1 (234) 567-890
              </a>
            </li>
          </ul>
        </nav>
        <h2 className={styles.footerHeading}>Follow Us</h2>
        <nav>
          <ul className={styles.AiOut}>
            <li>
              <a href="">
                <FaFacebook className={styles.svgNav} />
              </a>
            </li>
            <li>
              <a href="">
                <AiOutlineInstagram className={styles.svgNav} />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin className={styles.svgNav} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
