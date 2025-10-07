import { IoMdClose } from "react-icons/io";
import styles from "./Order.module.css";


const Order = ({ orderItems, setOrderItems }) => {
  const safeOrderItems = Array.isArray(orderItems) ? orderItems : [];

  const handleRemoveItem = (indexToRemove) => {
    setOrderItems(safeOrderItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className={styles.orderContainer}>
      <ul className={styles.orderList}>
        {safeOrderItems.map((dish, index) => (
          <li key={index} className={styles.orderItem}>
            <img src={dish.image} alt={dish.name} className={styles.orderImage} />
            <span className={styles.dishName}>{dish.name}</span>
            <span className={styles.dishPrice}>${dish.price}</span>
            <IoMdClose className={styles.close} onClick={() => handleRemoveItem(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;

