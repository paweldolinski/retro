import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import SliderSection from "./components/SliderSection";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

class App extends Component {
  state = {
    isScrolled: false,
  };
  scrollHandler = e => {
    if (window.scrollY > 100) {
      this.setState({
        isScrolled: true
      });
    } else {
      this.setState({
        isScrolled: false
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }
  render() {
    const { isScrolled } = this.state;
    return (
      <div className="App">
        <Header isScrolled={isScrolled}></Header>
        <SliderSection isScrolled={isScrolled}></SliderSection>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
        <Blog></Blog>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;
