import React, { Component } from "react";
import Separator from "./Separator";
import Line from "./Line";
import PortfolioItem from "./PortfolioItem";
import Test from "./Test";

class Portfolio extends Component {
  state = {
    search: "",
    tag: "",
    filteredImages: ""
  };
  clickHandler = e => {
    console.log(e.target.getAttribute("data-value"));

    console.log(this.state.search);
  };
  componentDidMount() {
    fetch("https://pixabay.com/api/?key=8421285-61e0ded0b62b92cbc0aaeafbc&q")
      .then(res => res.json())
      .then(data =>
        this.setState({
          search: data
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search > prevState.search) {
      const data = this.state.search.hits;
      console.log(data);

      const filteredImages = data.filter(item => item.tags.includes("snail"));
      console.log(filteredImages);
    }
  }

  render() {
    return (
      <section className="portfolio" id="portfolio">
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
              <p>Filter by</p>
              <ul className="portfolio__filters-list">
                <li data-value="money" onClick={this.clickHandler}>
                  <span>&#8226;</span>money
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
                search={this.state.search}
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
        <Test search={this.state.search}></Test>
      </section>
    );
  }
}

export default Portfolio;
