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

      <div>
        <h2>{t('qualityStandardsTitle')}</h2>
        <p>{t('qualityStandardsIntro')}</p>
      </div>
      
      <div>
        <h2>{t('sustainabilityTitle')}</h2>
        <p>{t('sustainabilityIntro')}</p>
      </div>

      <div>
        <h2>{t('specialOffersTitle')}</h2>
        <p>{t('specialOffersIntro')}</p>
      </div>

      <div>
        <h2>{t('cateringTitle')}</h2>
        <p>{t('cateringIntro')}</p>
      </div>

      <div>
        <h2>{t('customerServiceTitle')}</h2>
        <p>{t('customerServiceIntro')}</p>
      </div>

      <div>
        <h2>{t('franchiseOpportunitiesTitle')}</h2>
        <p>{t('franchiseOpportunitiesIntro')}</p>
      </div>

      <p>{t('copyright')}</p>
    </div>
  );
};

export default Description;


