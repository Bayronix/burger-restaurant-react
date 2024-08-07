import styles from "./TableReservation.module.css";

const TableReservation = () => {
  const handleReservation = () => {
    alert("Table reserved!");
  };

  return (
    <section id="Reservation" className={styles.bookTableSection}>
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

export default TableReservation;
