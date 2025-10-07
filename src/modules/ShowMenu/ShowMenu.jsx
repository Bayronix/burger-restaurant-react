import { NavLink } from "react-router-dom";
import style from "./ShowMenu.module.css";

const ShowMenu = () => {
  return (
    <section className={style.showMenuSection}>
      <div>
      <h3 className={style.menuBorder}>Menu</h3>
      </div>
    <div className={style.showMenuContainer} id="ShowMenu">
      
      <ul className={style.showMenuList}>
        <li className={style.showMenuElement}>
          <NavLink to="/OurMenu#burgers">
            <img src="../../../public/images/burgers/burger1.jpg" alt="Burgers" />
            <p>Burgers:</p>
          </NavLink>
        </li>
   
        <li className={style.showMenuElement}>
          <NavLink to="/OurMenu#drinks">
            <img src="../../../public/images/drinks/cocaCola.jpg" alt="Drinks" />
            <p>Drinks:</p>
          </NavLink>
        </li>
      </ul>
    </div>
    </section>
  );
};

export default ShowMenu;
