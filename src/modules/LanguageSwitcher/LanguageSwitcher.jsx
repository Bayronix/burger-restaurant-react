import { useTranslation } from 'react-i18next';
import { FlagIcon } from 'react-flag-kit';
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <div>
      <ul className={styles.ulSwitcher}>
        <li className={styles.liSwitcher}>
          <button className={styles.switcherButton} onClick={() => changeLanguage('en')}>
            <FlagIcon className={styles.flag}  code="GB" size={16} /> 
            {t('en')}
          </button>
        </li>
        <li className={styles.liSwitcher}>
          <button className={styles.switcherButton} onClick={() => changeLanguage('uk')}>
          <FlagIcon className={styles.flag}  code="UA" size={16} />
            {t('uk')} 
            
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;   
