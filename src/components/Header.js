import React, { Component } from "react";
import Nav from "./Nav";
import ToggleButton from "./ToggleButton";
import SideList from "./SideList";

class Header extends Component {
  state = {
    sideListOpen: false,
    isScrolled: false
  };

  sideListToggleHandler = () => {
    console.log("elo elo");
    this.setState(prevState => {
      return { sideListOpen: !prevState.sideListOpen };
    });
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
    console.log(this.state.isScrolled);
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  render() {
    let sideList;

    if (this.state.sideListOpen) {
      sideList = (
        <SideList sideListToggleHandler={this.sideListToggleHandler}></SideList>
      );
    }
    return (
      <header>
        <div
          className={this.state.sideListOpen ? "back-drop" : null}
          onClick={this.sideListToggleHandler}
        ></div>
        <ToggleButton
          click={this.sideListToggleHandler}
          sideListOpen={this.state.sideListOpen}
        ></ToggleButton>
        <Nav isScrolled={this.state.isScrolled}></Nav>
        {sideList}
      </header>
    );
  }
}

export default Header;
