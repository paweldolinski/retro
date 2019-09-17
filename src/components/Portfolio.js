import React, { Component } from "react";
import Separator from "./Separator";
import PortfolioItem from "./PortfolioItem";

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
    const category = e.target.getAttribute("data-value");
    await this.setState({
      category,
      filteredData: this.state.data.filter(image =>
        image.tags.includes(category)
      )
    });
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
                <li data-value="education">
                  <span>&#8226;</span>education
                </li>
                <li data-value="people">
                  <span>&#8226;</span>people
                </li>
                <li data-value="feelings">
                  <span>&#8226;</span>feelings
                </li>
              </ul>
            </div>
          </div>
          <PortfolioItem
            filteredData={this.state.filteredData}
            data={this.state.data}
            value={this.state.value}
            moreItems={this.state.moreItems}
          ></PortfolioItem>
        </div>
      </section>
    );
  }
}

export default Portfolio;
