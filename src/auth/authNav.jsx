import styles from "./auth.module.css";
import { NavLink } from "react-router-dom";
const Auth = () => {
  return (
    <div className={styles.divAuth}>
      <ul className={styles.ulAuth} >
        <li  className={styles.navItem}>
          <NavLink className={styles.liAuth} to="/Login">Login</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.liAuth} to="/Register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Auth;
