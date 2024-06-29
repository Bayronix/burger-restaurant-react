import { useState } from "react";
import Header from "./Header/Header";
import AboutUs from "./About-us/About-us";
import OurHistory from "./Our-history/Our-history";
import BookTable from "./Book-table/Book-table";
import OurMenu from "./Our-menu/Our-menu";

import Footer from "./Footer/Footer";
import BurgerSkills from "./BurgerSkills/BurgerSkills";

function App() {
  const [count, setCount] = useState(0);
  // cat
  return (
    <>
      <Header />
      <AboutUs />
      <OurHistory />
      <BurgerSkills />
      <BookTable />
      <OurMenu />
      <Footer />
    </>
  );
}

export default App;
