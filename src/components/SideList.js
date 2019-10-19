import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const SideList = props => {
  return (
    <nav className={props.sideListOpen ? "side-list open" : "side-list"}>
      <AnchorLink href="#top">
        <div className="side-list__logo">
          <img onClick={props.sideListToggleHandler} src={require("../assets/img/logo.png")} alt="logo side list" />
        </div>
      </AnchorLink>
      <ul>
        <AnchorLink href="#about-me">
          <li className="side-list__item" onClick={props.sideListToggleHandler} >ABOUT ME</li>
        </AnchorLink>
        <AnchorLink href="#portfolio">
          <li className="side-list__item" onClick={props.sideListToggleHandler} >PORTFOLIO</li>
        </AnchorLink>
        <AnchorLink href="#my-blog">
          <li className="side-list__item" onClick={props.sideListToggleHandler} >MY BLOG</li>
        </AnchorLink>
        <AnchorLink href="#contact">
          <li className="side-list__item" onClick={props.sideListToggleHandler} >CONTACT ME</li>
        </AnchorLink>
      </ul>
    </nav>
  );
};

export default SideList;
