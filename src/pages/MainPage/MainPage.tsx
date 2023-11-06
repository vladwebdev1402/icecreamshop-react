import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Banners from "../../components/Banners/Banners";
import HotItems from "../../components/HotItems/HotItems";
import About from "../../components/About/About";
import Subscribe from "../../components/Subscribe/Subscribe";
import Feedback from "../../components/Feedback/Feedback";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Banners />
      <HotItems />
      <About />
      <Subscribe />
      <Feedback />
    </>
  );
};

export default MainPage;
