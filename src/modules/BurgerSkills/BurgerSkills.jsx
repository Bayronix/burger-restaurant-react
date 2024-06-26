import "./BurgerSkills.css";
import { CiBurger } from "react-icons/ci";

const BurgerTechSkills = () => {
  return (
    <section id="burgerTechSkills" className="techskills">
      <div className="oll-ribbon">
        <div className="ribbon">
          <div className="transparent-skills">
            <ul className="transparent-list">
              <li className="transparent-link">
                <CiBurger />
                <p>Beef Patty</p> {/* Говяжий котлет */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Jalapenos</p> {/* Халапеньйо */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Mushrooms</p> {/* Гриби */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Pineapple</p> {/* Ананас */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Red Onion</p> {/* Цибуля */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Secret Sauce</p> {/* Спеціальний соус */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Sesame Seed Bun</p> {/* Булочка з кунжутом */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Grilled Patty</p> {/* Приготований на грилі паті */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Avocado</p> {/* Авокадо */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Fried Egg</p> {/* Смажене яйце */}
              </li>
              {/* Additional items */}
              <li className="ribbon-link">
                <CiBurger />
                <p>Bacon</p> {/* Бекон */}
              </li>
            </ul>
          </div>
        </div>

        <div className="transparent">
          <div className="transparent-skills">
            <ul className="transparent-list">
              <li className="transparent-link">
                <CiBurger />
                <p>Green Onion</p> {/* Зелена цибуля */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Special Gravy</p> {/* Спеціальний соус */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Red Tomato</p> {/* Червоний помідор */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Fresh Pineapple</p> {/* Свіжий ананас */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>White Onion</p> {/* Біла цибуля */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Secret Recipe Sauce</p> {/* Секретний рецепт соусу */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Wild Mushrooms</p> {/* Дикі гриби */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Sweet Pickles</p> {/* Солодкі мариновані огірки */}
              </li>
              <li className="ribbon-link">
                <CiBurger />
                <p>Ripe Avocado</p> {/* Дозрілий авокадо */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BurgerTechSkills;
