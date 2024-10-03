import Modal from "react-modal";
import PropTypes from "prop-types";
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

            <h4>Components:</h4>
            <ul>
              {selectedDish.components.map((component, index) => (
                <li key={index}>{component}</li>
              ))}
            </ul>
            <p>Price: ${selectedDish.price}</p>
            <button className={styles.modalButton} onClick={closeModal}>
              Order
            </button>
          </>
        )}
      </Modal>
    </section>
  );
};

OurMenu.propTypes = {
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  selectedDish: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    components: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default OurMenu;
