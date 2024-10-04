import styles from "./auth.module.css";
import { NavLink } from "react-router-dom";
const Auth = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/Login">LOGIN</NavLink>
        </li>
        {/* власна сторінка  */}
        <li className={styles.navItem}>
          <NavLink to="/Register">REGISTER</NavLink>
        </li>
        {/* власна сторінка */}
      </ul>
    </div>
  );
};
export default Auth;
