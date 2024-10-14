import styles from "./Our-history.module.css";
import { useTranslation } from "react-i18next";

const OurHistory = () => {
  const { t } = useTranslation(); // Ініціалізуємо локалізацію

  return (
    <section className={styles.historySection}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{t('ourHistoryTitle')}</h3>
        <p className={styles.description}>
          {t('ourHistoryDescription')}
        </p>
        <ul className={styles.statsList}>
          <li className={styles.statsItem}>
            <h3 className={styles.statsNumber}>{t('drinksCount')}</h3>
            <p className={styles.statsLabel}>{t('drinksLabel')}</p>
          </li>
          <li className={styles.statsItem}>
            <h3 className={styles.statsNumber}>{t('foodCount')}</h3>
            <p className={styles.statsLabel}>{t('foodLabel')}</p>
          </li>
          <li className={styles.statsItem}>
            <h3 className={styles.statsNumber}>{t('snacksCount')}</h3>
            <p className={styles.statsLabel}>{t('snacksLabel')}</p>
          </li>
        </ul>
        <img
          src="./images/restaurantOurHistory.jpg"
          alt={t('ourHistoryTitle')} 
          className={styles.historyImage}
        />
      </div>
    </section>
  );
};

export default OurHistory;
