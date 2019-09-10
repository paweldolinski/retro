import React, { Component } from "react";
import Separator from "./Separator";
import Line from "./Line";
import PortfolioItem from "./PortfolioItem";

class Portfolio extends Component {
  state = {
    search: "",
    tag: "",
    filteredImages: "",
    value: ""
  };
  clickHandler = e => {
    this.setState(prevState => {
      const valuee = e.target.getAttribute("data-value");
      return { value: !prevState.valuee };
    });
  };
  componentDidMount() {
    fetch("https://pixabay.com/api/?key=8421285-61e0ded0b62b92cbc0aaeafbc&q")
      .then(res => res.json())
      .then(data =>
        this.setState({
          search: data.hits
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search > prevState.search) {
      const data = this.state.search;
      console.log(data);
      console.log(this.state.value);

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
          </div>
          <Line></Line>
          <p className="portfolio__btn">BROWSE ALL</p>
        </div>
        <PortfolioItem search={this.state.search}></PortfolioItem>
      </section>
    );
  }
}

export default Portfolio;
