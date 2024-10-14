
import { useTranslation } from 'react-i18next';
import '../../translation/translation'; 


const Description = () => {
  const { t } = useTranslation(); 
  return (
    <div>
      <header>
        <h1>{t('title')}</h1>
        <h2>{t('subtitle')}</h2>
       
      </header>

      <p>{t('intro')}</p>

      <h2>{t('deliveryTitle')}</h2>
      <p>{t('deliveryIntro')}</p>

      <h2>{t('pickupTitle')}</h2>
      <p>{t('pickupIntro')}</p>

      <p>{t('copyright')}</p>
    </div>
  );
};

export default Description;
