import React from "react";
import "./styles/app.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Banners from "./components/Banners/Banners";
import HotItems from "./components/HotItems/HotItems";
import About from "./components/About/About";
import Subscribe from "./components/Subscribe/Subscribe";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banners />
      <HotItems />
      <About />
      <Subscribe />
    </div>
  );
}

export default App;
