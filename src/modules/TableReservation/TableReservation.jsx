import styles from "./TableReservation.module.css";
import PropTypes from "prop-types";

const TableReservation = ({ modalIsOpen }) => {
  const handleReservation = () => {
    alert("Table reserved!");
  };

  return (
    <section
      id="Reservation"
      className={`${styles.bookTableSection} ${
        modalIsOpen ? styles.NoBackground : ""
      }`}
    >
      <div className={styles.bookTableContainer}>
        <div>
          <h3 className={styles.bookTableHeading}>
            <b>Celebrate at one of the finest restaurants.</b>
          </h3>
        </div>
        <button className={styles.bookTableButton} onClick={handleReservation}>
          Table Reservation
        </button>
      </div>
    </section>
  );
};

TableReservation.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
};

export default TableReservation;
