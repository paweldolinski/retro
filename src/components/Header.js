import React, { Component } from "react";
import Nav from "./Nav";
import ToggleButton from "./ToggleButton";
import SideList from "./SideList";

class Header extends Component {
  state = {
    sideListOpen: false
  };

  sideListToggleHandler = () => {
    this.setState(prevState => {
      return { sideListOpen: !prevState.sideListOpen };
    });
  };

  render() {
    const { sideListOpen } = this.state;

    return (
      <header>
        {console.log(this.props.isScrolled)}
        <div
          className={sideListOpen ? "back-drop" : null}
          onClick={this.sideListToggleHandler}
        ></div>
        <ToggleButton
          click={this.sideListToggleHandler}
          sideListOpen={sideListOpen}
        ></ToggleButton>
        <Nav isScrolled={this.props.isScrolled}></Nav>
        <SideList
          sideListToggleHandler={this.sideListToggleHandler}
          sideListOpen={sideListOpen}
        ></SideList>
      </header>
    );
  }
}

export default Header;
