import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="">ABOUT ME</a>
        </li>
        <li className="nav__item">
          <a href="">PORTFOLIO</a>
        </li>
        <li className="nav__item--logo">
          <a href="">
            <img src={require("../assets/img/logo.png")} />
          </a>
        </li>

        <li className="nav__item">
          <a href="">MY BLOG</a>
        </li>
        <li className="nav__item">
          <a href="">CONTACT ME</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
