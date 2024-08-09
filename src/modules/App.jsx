import { useState } from "react";

import Header from "./Header/Header";
import Hero from "./Hero/Hero.jsx";
import AboutUs from "./About-us/About-us";
import OurHistory from "./Our-history/Our-history";
import TableReservation from "./TableReservation/TableReservation.jsx";
import OurMenu from "./Our-menu/Our-menu";
import Comment from "./Comment/Comment.jsx";
import Footer from "./Footer/Footer";
import BurgerSkills from "./BurgerSkills/BurgerSkills";
import styles from "./App.module.css";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const openModal = (dish) => {
    setSelectedDish(dish);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDish(null);
  };

  return (
    <>
      <div className={styles.backgroundApp}>
        <Header modalIsOpen={modalIsOpen} />
        <Hero />
      </div>
      <BurgerSkills />
      <OurMenu
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        selectedDish={selectedDish}
      />

      <TableReservation />
      <OurHistory />
      <AboutUs />
      <BurgerSkills />
      <Footer />
      <Comment />
    </>
  );
}

export default App;
