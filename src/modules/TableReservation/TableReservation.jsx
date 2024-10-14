import styles from "./TableReservation.module.css";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const TableReservation = ({ modalIsOpen }) => {
  const { t } = useTranslation(); 

  const handleReservation = () => {
    alert(t('tableReserved')); 
  };

  return (
    <section
      id="Reservation"
      className={`${styles.bookTableSection} ${modalIsOpen ? styles.NoBackground : ""}`}
    >
      <div className={styles.bookTableContainer}>
        <div>
          <h3 className={styles.bookTableHeading}>
            <b>{t('reservationTitle')}</b> 
          </h3>
        </div>
        <button className={styles.bookTableButton} onClick={handleReservation}>
          {t('tableReservation')} 
        </button>
      </div>
    </section>
  );
};

TableReservation.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
};

export default TableReservation;
