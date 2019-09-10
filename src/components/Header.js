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
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  render() {
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
        <SideList
          sideListToggleHandler={this.sideListToggleHandler}
          sideListOpen={this.state.sideListOpen}
        ></SideList>
      </header>
    );
  }
}

export default Header;
