import React from "react";
import styles from "./Book-table.module.css"; // Імпортуємо CSS модулі

const BookTable = () => {
  const handleReservation = () => {
    alert("Table reserved!");
  };

  return (
    <section className={styles.bookTableSection}>
      <div className={styles.bookTableContainer}>
        <div>
          <h3 className={styles.bookTableHeading}>
            Celebrate at one of the finest restaurants.
          </h3>
          <p className={styles.bookTableDescription}>
            Only this month, business lunch starting from $25
          </p>
        </div>
        <button className={styles.bookTableButton} onClick={handleReservation}>
          Table Reservation
        </button>
      </div>
    </section>
  );
};

export default BookTable;
