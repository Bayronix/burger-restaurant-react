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
import NotFound from "../pages/NotFoundePage/NotFound";
import ShowMenu from "./ShowMenu/ShowMenu";



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
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <>
              <div className={styles.backgroundApp}>
                <Header modalIsOpen={modalIsOpen} />
                <Hero />
              </div>
              <BurgerSkills />
              <AboutUs />
              <OurHistory />
              <Description />
              <Footer />
              <Comment />
              
            </>
          }
        />
        <Route
          path="/OurMenu"
          element={
            <>
              <Header modalIsOpen={modalIsOpen} />
              <ShowMenu/>
              <Menu />
            </>
          }
        />
        <Route
          path="/Reservation"
          element={
            <>
              <Header modalIsOpen={modalIsOpen} />
              <TableReservation
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
            </>
          }
        />
  
      </Routes>
    </div>
  );
}

export default App;



