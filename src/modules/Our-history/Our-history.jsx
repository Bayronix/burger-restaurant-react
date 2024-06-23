import React from "react";
import styles from "./history.module.css";

const History = () => {
  return (
    <section className={styles.historySection}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>Our History</h3>
        <p className={styles.description}>
          Like any other unique place, we have our own special story. The idea
          for the restaurant came unexpectedly to its founders. During a walk in
          the forest, the creator of our restaurant got stranded hundreds of
          kilometers away from the nearest town. Far from civilization and
          communication, they had to improvise and set up a basic living
          arrangement, sourcing and preparing food for themselves.
        </p>
        <ul className={styles.statsList}>
          <li className={styles.statsItem}>
            <h3 className={styles.statsNumber}>93</h3>
            <p className={styles.statsLabel}>Drinks</p>
          </li>
          <li className={styles.statsItem}>
            <h3 className={styles.statsNumber}>206</h3>
            <p className={styles.statsLabel}>Food</p>
          </li>
          <li className={styles.statsItem}>
            <h3 className={styles.statsNumber}>71</h3>
            <p className={styles.statsLabel}>Snacks</p>
          </li>
        </ul>
        <img
          src="./src/images/history.jpg"
          alt="Our History"
          className={styles.historyImage}
        />
      </div>
    </section>
  );
};

export default History;
