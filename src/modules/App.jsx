import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import AboutUs from "./About-us/About-us";
import OurHistory from "./Our-history/Our-history";
import BookTable from "./Book-table/Book-table";
import OurMenu from "./Our-menu/Our-menu";
import Comment from "./Comment/Comment.jsx";
import Footer from "./Footer/Footer";
import BurgerSkills from "./BurgerSkills/BurgerSkills";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Header />
      <AboutUs />
      <OurHistory />
      <BurgerSkills />
      <BookTable />
      <OurMenu openModal={openModal} />
      <Footer />
      <Comment />
    </>
  );
}

export default App;
