import React from "react";
import "./styles/app.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Banners from "./components/Banners/Banners";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banners />
    </div>
  );
}

export default App;
