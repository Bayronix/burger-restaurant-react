import { useState } from "react";
import Modal from "react-modal";
import styles from "./Our-menu.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    maxHeight: "80%",
    overflow: "auto",
  },
};

Modal.setAppElement("#root");

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
      <h3 className={styles.ourMenu}>Our Menu</h3>
      <ul className={styles.dishesList}>
        <li className={styles.dishItem}>
          <img
            src="/images/burger1.jpg"
            alt="Mini Hamburger"
            className={styles.dishItemImage}
          />
          <h3 className={styles.dishTitle}>Hamburger</h3>
          <p className={styles.dishPrice}>$3</p>
          <button
            className={styles.button}
            onClick={() =>
              openModal({
                name: "Hamburger",
                price: 3,
                image: "/images/burger1.jpg",
              })
            }
          >
            Order
          </button>
        </li>
        <li className={styles.dishItem}>
          <img
            src="/images/burger2.jpg"
            alt="Mini Hamburger"
            className={styles.dishItemImage}
          />
          <h3 className={styles.dishTitle}>Cheeseburger</h3>
          <p className={styles.dishPrice}>$5</p>
          <button
            className={styles.button}
            onClick={() =>
              openModal({
                name: "Hamburger",
                price: 3,
                image: "/images/burger2.jpg",
              })
            }
          >
            Order
          </button>
        </li>
        <li className={styles.dishItem}>
          <img
            src="/images/burger3.jpg"
            alt="Mini Hamburger"
            className={styles.dishItemImage}
          />
          <h3 className={styles.dishTitle}>Bacon Burger</h3>
          <p className={styles.dishPrice}>$4</p>
          <button
            className={styles.button}
            onClick={() =>
              openModal({
                name: "Hamburger",
                price: 3,
                image: "/images/burger3.jpg",
              })
            }
          >
            Order
          </button>
        </li>
        <li className={styles.dishItem}>
          <img
            src="/images/burger4.jpg"
            alt="Mini Hamburger"
            className={styles.dishItemImage}
          />
          <h3 className={styles.dishTitle}>Vegetarian Burger</h3>
          <p className={styles.dishPrice}>$7</p>
          <button
            className={styles.button}
            onClick={() =>
              openModal({
                name: "Hamburger",
                price: 3,
                image: "/images/burger4.jpg",
              })
            }
          >
            Order
          </button>
        </li>
        <li className={styles.dishItem}>
          <img
            src="/images/burger5.jpg"
            alt="Mini Hamburger"
            className={styles.dishItemImage}
          />
          <h3 className={styles.dishTitle}>Turkey Burger</h3>
          <p className={styles.dishPrice}>$9</p>
          <button
            className={styles.button}
            onClick={() =>
              openModal({
                name: "Hamburger",
                price: 3,
                image: "/images/burger5.jpg",
              })
            }
          >
            Order
          </button>
        </li>
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Order Modal"
      >
        {selectedDish && (
          <>
            <h2>{selectedDish.name}</h2>
            <img
              src={selectedDish.image}
              alt={selectedDish.name}
              className={styles.modalImage}
            />
            <p>Price: ${selectedDish.price}</p>
            <button className={styles.modalButton} onClick={closeModal}>
              Close Modal
            </button>
          </>
        )}
      </Modal>
    </section>
  );
};

export default OurMenu;
