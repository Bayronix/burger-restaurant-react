import { useState } from "react";
import Modal from "react-modal";
import styles from "./Our-menu.module.css";
import DishItem from "./Dishes";
import dishes from "./Dishes.json";
import { IoMdClose } from "react-icons/io";
Modal.setAppElement("#root");

const OurMenu = ({ openModal, closeModal, modalIsOpen, selectedDish }) => {
  return (
    <section className={styles.ourDishesSection}>
      <h3 id="Menu" className={styles.ourMenu}>
        Our Menu
      </h3>
      <ul className={styles.dishesList}>
        {dishes.map((dish, index) => (
          <DishItem key={index} dish={dish} openModal={() => openModal(dish)} />
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
            <div className={styles.modalHeader}>
              <h2>{selectedDish.name}</h2>
              <IoMdClose className={styles.close} onClick={closeModal} />
            </div>
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
