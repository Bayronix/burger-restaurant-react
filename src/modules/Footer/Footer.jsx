import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerFirstDiv}>
        <div className={styles.footerDiv}>
          <a href="tel:+1234567890" className={styles.phoneNumber}>
            +1 (234) 567-890
          </a>

          <nav className={styles.footerNav}>
            <ul>
              <li>
                <a
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                  href="#"
                  className={styles.navLink}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                  href="#"
                  className={styles.navLink}
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                  href="#"
                  className={styles.navLink}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  rel="nofollow noreferrer noopener"
                  target="_blank"
                  href="#"
                  className={styles.navLink}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
