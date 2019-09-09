import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const SideList = props => {
  return (
    <nav className="side-list">
      <AnchorLink href="#top">
        <div className="side-list__logo">
          <img src={require("../assets/img/logo.png")} alt="logo side list" />
        </div>
      </AnchorLink>
      <ul>
        <AnchorLink href="#about-me">
          <li onClick={props.sideListToggleHandler}>ABOUT ME</li>
        </AnchorLink>
        <AnchorLink href="#portfolio">
          <li onClick={props.sideListToggleHandler}>PORTFOLIO</li>
        </AnchorLink>
        <AnchorLink href="#my-blog">
          <li onClick={props.sideListToggleHandler}>MY BLOG</li>
        </AnchorLink>
        <AnchorLink href="#contact">
          <li onClick={props.sideListToggleHandler}>CONTACT ME</li>
        </AnchorLink>
      </ul>
    </nav>
  );
};

export default SideList;
