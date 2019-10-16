import React, { Component } from "react";
import Separator from "./Separator";
import PortfolioItem from "./PortfolioItem";
import BrowseMore from "./BrowseMore";

class Portfolio extends Component {
  state = {
    data: [],
    filteredData: [],
    category: "music",
    apiURL: "https://pixabay.com/api",
    apiKEY: "8421285-61e0ded0b62b92cbc0aaeafbc",
    moreItems: 8
  };

  clickHandler = async e => {

    if (e.target.tagName === "LI") {
      let category = e.target.getAttribute("data-value");

      await this.setState({
        category,
        filteredData: this.state.data.filter(image =>
          image.tags.includes(category)
        )
      });
    } if (this.state.moreItems > 8) {
      this.setState({
        moreItems: 8
      })
    }
  };

  getMoreResults = () => {
    const { filteredData } = this.state
    if (filteredData) {
      this.setState(prev => {
        return {
          moreItems: prev.moreItems + 4
        };
      });
    }
    console.log(this.state.moreItems)
  };

  getData = () => {
    const { apiKEY, apiURL } = this.state;

    fetch(
      `${apiURL}/?key=${apiKEY}&q=retro&image_type=photo&per_page=200&category=${this.state.category}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.hits,
          filteredData: data.hits
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { data, filteredData, value, moreItems } = this.state
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
              <p>Filter by</p>
              <ul
                className="portfolio__filters-list"
                onClick={this.clickHandler}
              >
                <li data-value="music">
                  <span>&#8226;</span>music
                </li>
                <li data-value="radio">
                  <span>&#8226;</span>radio
                </li>
                <li data-value="old">
                  <span>&#8226;</span>old
                </li>
                <li data-value="vinyl">
                  <span>&#8226;</span>vinyl
                </li>
                <li data-value="record">
                  <span>&#8226;</span>record
                </li>
                <li data-value="gramophone">
                  <span>&#8226;</span>gramophone
                </li>
                <li data-value="microphone">
                  <span>&#8226;</span>microphone
                </li>
              </ul>
            </div>
          </div>
          <PortfolioItem
            filteredData={filteredData}
            data={data}
            value={value}
            moreItems={moreItems}
          ></PortfolioItem>
        </div>
        <BrowseMore getMoreResults={this.getMoreResults}></BrowseMore>
      </section>
    );
  }
}

export default Portfolio;
