import { NavLink } from "react-router-dom";
import style from "./ShowMenu.module.css";

const ShowMenu = () => {
  return (
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
        <li className={style.showMenuElement}>
          <NavLink to="/OurMenu">
            <img src="../../../public/images/sides/sides.jpg" alt="Sides:" />
            <p>Sides:</p>
          </NavLink>
        </li>
        <li className={style.showMenuElement}>
          <NavLink to="/OurMenu">
            <img src="#" alt="Desserts:" />
            <p>Desserts:</p>
          </NavLink>
        </li>

        <li className={style.showMenuElement}>
          <NavLink to="/OurMenu">
            <img src="#" alt="Combo Meals:" />
            <p>Combo Meals:</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ShowMenu;
