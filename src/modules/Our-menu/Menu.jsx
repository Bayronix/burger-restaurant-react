
import BurgersMenu from "./Burgers/BurgersMenu";
import DrinksItemMenu from "./Drinks/DrinksMenu";
import { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { useLocation } from "react-router-dom";

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

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  

  return (
    <div>
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
