import { useState } from "react";
import BurgersMenu from "./Burgers/BurgersMenu";
import DrinksItemMenu from "./Drinks/DrinksMenu";
import { useLocation } from "react-router-dom";
import Order from "../Order/Order"; 

const Menu = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const [orderItems, setOrderItems] = useState([]); 
  const openModal = (dish) => {
    setSelectedDish(dish);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDish(null);
    setOrderItems((prevOrderItems) => [...prevOrderItems, selectedDish]);
  };

  const { hash } = useLocation();

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
      <Order orderItems={orderItems} /> 
    </div>
  );
};

export default Menu;
