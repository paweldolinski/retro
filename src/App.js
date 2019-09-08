import React from "react";
import "./App.scss";
import Header from "./components/Header";
import SliderSection from "./components/SliderSection";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SliderSection></SliderSection>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
}

export default App;
