import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "./BurgersMenu.module.css";
import BurgerItem from "./Burgers";
import Components from "./Burger.json";
import { IoMdClose } from "react-icons/io";

Modal.setAppElement("#root");

const BurgersMenu = ({ openModal, closeModal, modalIsOpen, selectedDish }) => {
  return (
    <section className={styles.ourDishesSection}>
      <div className={styles.divOurDishesSection}>
        <h3 className={styles.ourMenu}>Burgers</h3>
        <ul className={styles.dishesList}>
          {Components.map((dish, index) => (
            <BurgerItem
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
      </div>
    </section>
  );
};

BurgersMenu.propTypes = {
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

export default BurgersMenu;
