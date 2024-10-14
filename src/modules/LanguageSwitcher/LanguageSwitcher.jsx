import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation(); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>
        {t('en')}
      </button>
      <button onClick={() => changeLanguage('uk')}>
        {t('uk')} 
      </button>
    </div>
  );
};

export default LanguageSwitcher;
