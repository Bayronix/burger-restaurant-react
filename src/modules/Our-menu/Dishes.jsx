import styles from "./Our-menu.module.css";
import PropTypes from "prop-types";

const DishItem = ({ dish, openModal }) => {
  return (
    <li className={styles.dishItem}>
      <img src={dish.image} alt={dish.name} className={styles.dishItemImage} />
      <h3 className={styles.dishTitle}>{dish.name}</h3>
      <p className={styles.dishPrice}>${dish.price}</p>
      <button className={styles.button} onClick={() => openModal(dish)}>
        Order
      </button>
    </li>
  );
};

DishItem.propTypes = {
  dish: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    components: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default DishItem;
