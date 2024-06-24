import React from "react";
import styles from "./ourdishes.module.css"; // Імпортуємо CSS модулі

const OurDishes = () => {
  return (
    <section className={styles.ourDishesSection}>
      <h3 className={styles.ourMenu}>Our Menu</h3>
      <ul className={styles.dishesList}>
        <li className={styles.dishItem}>
          <img
            src="/images/burger1.jpg"
            alt="Mini Hamburger"
            className={styles.dishItemImage}
          />
          <h3 className={styles.dishTitle}>Mini Hamburger</h3>
          <p className={styles.dishPrice}>$26</p>
        </li>
        <li className={styles.dishItem}>
          <img
            src="/images/burger1.jpg"
            alt="Mini Hamburger"
            className={styles.dishItemImage}
          />
          <h3 className={styles.dishTitle}>Mini Hamburger</h3>
          <p className={styles.dishPrice}>$26</p>
        </li>
        <li className={styles.dishItem}>
          <img
            src="/images/burger1.jpg"
            alt="Mini Hamburger"
            className={styles.dishItemImage}
          />
          <h3 className={styles.dishTitle}>Mini Hamburger</h3>
          <p className={styles.dishPrice}>$26</p>
        </li>
        <li className={styles.dishItem}>
          <img
            src="/images/burger1.jpg"
            alt="Mini Hamburger"
            className={styles.dishItemImage}
          />
          <h3 className={styles.dishTitle}>Mini Hamburger</h3>
          <p className={styles.dishPrice}>$26</p>
        </li>
        <li className={styles.dishItem}>
          <img
            src="/images/burger1.jpg"
            alt="Mini Hamburger"
            className={styles.dishItemImage}
          />
          <h3 className={styles.dishTitle}>Mini Hamburger</h3>
          <p className={styles.dishPrice}>$26</p>
        </li>
        <li className={styles.dishItem}>
          <img
            src="/images/burger1.jpg"
            alt="Mini Hamburger"
            className={styles.dishItemImage}
          />
          <h3 className={styles.dishTitle}>Mini Hamburger</h3>
          <p className={styles.dishPrice}>$26</p>
        </li>
      </ul>
    </section>
  );
};

export default OurDishes;
