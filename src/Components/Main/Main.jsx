import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "../Slider/Slider";
import NavigateButtons from "../NavigateButton/NavigateButtons";
import ProductSection from "../ProductSection/ProductSection";
import Footer from "../Footer/Footer";

const Main = () => {
  useEffect(() => {localStorage.clear();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      {/* <NavigateButtons></NavigateButtons> */}
      <Slider></Slider>
      <ProductSection></ProductSection>
      <Footer></Footer>
    </>
  );
};

export default Main;