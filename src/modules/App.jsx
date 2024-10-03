import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import AboutUs from "./About-us/About-us";
import OurHistory from "./Our-history/Our-history";
import TableReservation from "./TableReservation/TableReservation";
import OurMenu from "./Our-menu/Our-menu";
import Comment from "./Comment/Comment";
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
    <div className={styles.backgroundApp}>
      <Header modalIsOpen={modalIsOpen} />
      <Hero />
      <BurgerSkills />
      <Routes>
        <Route
          path="/OurMenu"
          element={
            <OurMenu
              openModal={openModal}
              closeModal={closeModal}
              modalIsOpen={modalIsOpen}
              selectedDish={selectedDish}
            />
          }
        />
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
        <Route path="/AboutUs" element={<AboutUs />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      <Comment />
      <Footer />
    </div>
  );
}

export default App;
