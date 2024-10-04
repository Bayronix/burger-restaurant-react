import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "./Drinks.module.css";
import DrinksItem from "./Drinks";
import Drinks from "./Drinks.json";
import { IoMdClose } from "react-icons/io";

Modal.setAppElement("#root");

const DrinksItemMenu = ({
  openModal,
  closeModal,
  modalIsOpen,
  selectedDish,
}) => {
  return (
    <section className={styles.ourDishesSection}>
      <div className={styles.divOurDishesSection}>
        <h3 className={styles.ourMenu}>Drinks</h3>
        <ul className={styles.dishesList}>
          {Drinks.map((dish, index) => (
            <DrinksItem
              key={index}
              dish={dish}
              openModal={() => openModal(dish)}
            />
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
              <button className={styles.modalButton} onClick={closeModal}>
                Order
              </button>
            </>
          )}
        </Modal>
      </div>
    </section>
  );
};

DrinksItemMenu.propTypes = {
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  selectedDish: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default DrinksItemMenu;
