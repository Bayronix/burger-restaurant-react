// src/components/Description/Description.js
import { useTranslation } from 'react-i18next';
import '../../translation/translation'; 
import styles from './Description.module.css';

const Description = () => {
  const { t } = useTranslation(); 
  return (
    <div className={styles.descriptionContainer}>
      <header>
        <h1>{t('title')}</h1>
        <h2>{t('subtitle')}</h2>
      </header>
      <div>
      <h2>{t('deliveryTitle')}</h2>
      <p>{t('deliveryIntro')}</p>
      </div>
      
       <div>
       <h2>{t('pickupTitle')}</h2>
       <p>{t('pickupIntro')}</p>
       </div>
      
    </div>
  );
};

export default Description;

