import { useState } from "react";
import Modal from "react-modal";
import styles from "./Our-menu.module.css";
import DishItem from "./Dishes";

Modal.setAppElement("#root");

const dishes = [
  {
    name: "Hamburger",
    price: 3,
    image: "/images/burger1.jpg",
    components: [
      "Bun",
      "Beef Patty",
      "Lettuce",
      "Tomato",
      "Onion",
      "Pickles",
      "Ketchup",
      "Mustard",
    ],
  },
  {
    name: "Cheeseburger",
    price: 5,
    image: "/images/burger2.jpg",
    components: [
      "Bun",
      "Beef Patty",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Onion",
      "Pickles",
      "Ketchup",
      "Mustard",
    ],
  },
  {
    name: "Bacon Burger",
    price: 4,
    image: "/images/burger3.jpg",
    components: [
      "Bun",
      "Beef Patty",
      "Bacon",
      "Cheese",
      "Lettuce",
      "Tomato",
      "Onion",
      "Pickles",
      "Ketchup",
      "Mustard",
    ],
  },
  {
    name: "Vegetarian Burger",
    price: 7,
    image: "/images/burger4.jpg",
    components: [
      "Bun",
      "Vegetarian Patty",
      "Lettuce",
      "Tomato",
      "Onion",
      "Pickles",
      "Ketchup",
      "Mustard",
    ],
  },
  {
    name: "Turkey Burger",
    price: 9,
    image: "/images/burger5.jpg",
    components: [
      "Bun",
      "Turkey Patty",
      "Lettuce",
      "Tomato",
      "Onion",
      "Pickles",
      "Ketchup",
      "Mustard",
    ],
  },
];

const OurMenu = () => {
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
    <section className={styles.ourDishesSection}>
      <h3 id="Menu" className={styles.ourMenu}>
        Our Menu
      </h3>
      <ul className={styles.dishesList}>
        {dishes.map((dish, index) => (
          <DishItem key={index} dish={dish} openModal={openModal} />
        ))}
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        contentLabel="Order Modal"
      >
        {selectedDish && (
          <>
            <h2>{selectedDish.name}</h2>
            <button className={styles.modalButton} onClick={closeModal}>
              Close
            </button>
            <img
              src={selectedDish.image}
              alt={selectedDish.name}
              className={styles.modalImage}
            />

            <p>Price: ${selectedDish.price}</p>
            <h4>Components:</h4>
            <ul>
              {selectedDish.components.map((component, index) => (
                <li key={index}>{component}</li>
              ))}
            </ul>
            <button className={styles.modalButton} onClick={closeModal}>
              Order
            </button>
          </>
        )}
      </Modal>
    </section>
  );
};

export default OurMenu;
