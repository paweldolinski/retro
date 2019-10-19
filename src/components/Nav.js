import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = props => {
  return (
    <nav className={props.isScrolled ? "nav nav-height" : "nav"}>
      <ul className={props.isScrolled ? "nav__list list-height" : "nav__list"}>
        <AnchorLink offset="70" href="#about-me">
          <li className="nav__item">ABOUT ME</li>
        </AnchorLink>
        <AnchorLink offset="70" href="#portfolio">
          <li className="nav__item">PORTFOLIO</li>
        </AnchorLink>
        <li
          className={
            props.isScrolled
              ? "nav__item--logo scale-down"
              : "nav__item--logo"
          }
        >
          <AnchorLink offset="70" href="#top">
            <img src={require("../assets/img/logo.png")} alt="logo" />
          </AnchorLink>
        </li>
        <AnchorLink offset="70" href="#my-blog">
          <li className="nav__item">MY BLOG</li>
        </AnchorLink>
        <AnchorLink offset="70" href="#contact">
          <li className="nav__item">CONTACT ME</li>
        </AnchorLink>
      </ul>
    </nav>
  );
};

export default Nav;
