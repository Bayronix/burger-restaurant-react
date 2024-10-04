import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import AboutUs from "./About-us/About-us";
import OurHistory from "./Our-history/Our-history";
import TableReservation from "./TableReservation/TableReservation";
import Menu from "./Our-menu/Menu";
import Comment from "./Comment/Comment";
import Footer from "./Footer/Footer";
import BurgerSkills from "./BurgerSkills/BurgerSkills";
import Description from "./Description/Description";
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
    <div className={styles.backgroundApp}>
      <Header modalIsOpen={modalIsOpen} />
      <Hero />
      <BurgerSkills />
      <Routes>
        <Route path="/OurMenu" element={<Menu />} />
        ;
        <Route
          path="/Reservation"
          element={
            <TableReservation
              modalIsOpen={modalIsOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          }
        />
        {/* <Route path="/OurHistory" element={<OurHistory />} />  */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <AboutUs />
      <OurHistory />
      <Description />
      <Footer />
      <Comment />
    </div>
  );
}

export default App;
