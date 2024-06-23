import { useState } from "react";
import Header from "./Header/Header";
import AboutUs from "./About-us/About-us";
import OurHistory from "./Our-history/Our-history";
import BookTable from "./Book-table/Book-table";
import OurDishes from "./Our-dishes/OurDishes";
import OurMenu from "./Our-menu/Our-menu";
import Footer from "./Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AboutUs />
      <OurHistory />
      <BookTable />
      <OurDishes />
      <OurMenu />
      <Footer />
    </>
  );
}

export default App;
