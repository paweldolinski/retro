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
  clickHandler = async e => {
    const value = e.target.getAttribute("data-value");
    await this.setState(
      {
        value
      },
      () => {
        this.setState({
          filteredImages: this.state.search.filter(item =>
            item.tags.includes(this.state.value)
          )
        });
        console.log(this.state.filteredImages);
        console.log(this.state.search);
      }
    );
  };

  componentDidMount() {
    fetch(
      "https://pixabay.com/api/?key=8421285-61e0ded0b62b92cbc0aaeafbc&per_page=40&q"
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          search: data.hits,
          filteredImages: data.hits
        })
      );
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
              <ul
                className="portfolio__filters-list"
                onClick={this.clickHandler}
              >
                <li data-value="sea">
                  <span>&#8226;</span>sea
                </li>
                <li data-value="nature">
                  <span>&#8226;</span>nature
                </li>
                <li data-value="all">
                  <span>&#8226;</span>all
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
          <PortfolioItem
            filteredImages={this.state.filteredImages}
            search={this.state.search}
            value={this.state.value}
          ></PortfolioItem>
          <div className="potfolio__box box">
            <Line></Line>
            <p className="portfolio__btn">BROWSE ALL</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
