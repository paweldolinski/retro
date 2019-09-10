import React from "react";
import Separator from "./Separator";
import Line from "./Line";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="portfolio__box box">
          <div className="portfolio__title title">
            <h1>PORTFOLIO</h1>
            <Separator></Separator>
            <p>SIMPLICITY IS THE ULTIMATE SOPHISTICATION</p>
          </div>
        </div>
        <div className="potfolio__box box">
          <div className="portfolio__filters">
            <p>Filter by :</p>
            <ul className="portfolio__filters-list">
              <li>
                <span>&#8226;</span>design
              </li>
              <li>
                <span>&#8226;</span>logo
              </li>
              <li>
                <span>&#8226;</span>photography
              </li>
              <li>
                <span>&#8226;</span>poster
              </li>
              <li>
                <span>&#8226;</span>resources
              </li>
              <li>
                <span>&#8226;</span>retro
              </li>
              <li>
                <span>&#8226;</span>t-shirts
              </li>
              <li>
                <span>&#8226;</span>video
              </li>
            </ul>
          </div>
          <div className="portfolio__portfolio">
            <PortfolioItem
              icon={require("../assets/img/portfolio-icons/icons_542.png")}
              title="GALLERIES ARE FUNNY"
            ></PortfolioItem>
            <PortfolioItem
              icon={require("../assets/img/portfolio-icons/icons_548.png")}
              title="A VIMEO REEL"
            ></PortfolioItem>
            <PortfolioItem
              icon={require("../assets/img/portfolio-icons/icons_551.png")}
              title="LOVE FOR OLD CAMERAS"
            ></PortfolioItem>
            <PortfolioItem
              icon={require("../assets/img/portfolio-icons/icons_545.png")}
              title="DETAILED PROJECT PAGE"
            ></PortfolioItem>
            <PortfolioItem
              icon={require("../assets/img/portfolio-icons/icons_548.png")}
              title="YOUTUBE VIDEO"
            ></PortfolioItem>
            <PortfolioItem
              icon={require("../assets/img/portfolio-icons/icons_645.png")}
              title="ANOTHER EXTERNAL LINK"
            ></PortfolioItem>
            <PortfolioItem
              icon={require("../assets/img/portfolio-icons/icons_648.png")}
              title="LIGHTBOX IMAGE"
            ></PortfolioItem>
            <PortfolioItem
              icon={require("../assets/img/portfolio-icons/icons_551.png")}
              title="THE DARK TEMPEST"
            ></PortfolioItem>
          </div>
          <Line></Line>
          <p className="portfolio__btn">BROWSE ALL</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
