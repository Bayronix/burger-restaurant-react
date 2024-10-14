import { Routes, Route } from "react-router-dom";

import BurgersMenu from "./Burgers/BurgersMenu";
import DrinksItemMenu from "./Drinks/DrinksMenu";
import { useState } from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const openModal = (dish) => {
    setSelectedDish(dish);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDish(null);
  };
  return (
    <div>
      <h3 id="OurMenu" className={styles.ourMenu}>
        Our Menu
      </h3>
      <BurgersMenu
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        selectedDish={selectedDish}
      />
      <DrinksItemMenu
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        selectedDish={selectedDish}
      />
    </div>
  );
};

export default Menu;