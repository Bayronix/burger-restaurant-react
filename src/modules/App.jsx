import { useState } from "react";
import Header from "./Header/Header";
import AboutUs from "./About-us/About-us";
import OurStory from "./Our-story/Our-story";
import BookTable from "./Book-table/Book-table";
import OurDishes from "./Our-dishes/OurDishes";
import OurMenu from "./Our-menu/Our-menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <AboutUs />
      <OurStory />
      <BookTable />
      <OurDishes />
      <OurMenu />
    </>
  );
}

export default App;
