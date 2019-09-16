import React, { Component } from "react";
import Separator from "./Separator";
import Line from "./Line";
import PortfolioItem from "./PortfolioItem";

class Portfolio extends Component {
  state = {
    data: "",
    category: "music",
    perPage: 8,
    apiURL: "https://pixabay.com/api",
    apiKEY: "8421285-61e0ded0b62b92cbc0aaeafbc"
  };
  clickHandler = async e => {
    const category = e.target.getAttribute("data-value");
    await this.setState({
      category,
      perPage: 8
    });
    console.log(this.state.data);
  };
  closeLightbox = () => {
    this.state.isOpen = true;
  };

  getData = () => {
    const { apiKEY, apiURL } = this.state;
    fetch(
      `${apiURL}/?key=${apiKEY}&q=retro&image_type=photo&per_page=${this.state.perPage}&category=${this.state.category}`
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          data: data.hits
        })
      )
      .catch(err => console.log(err));
  };
  getMoreResults = () => {
    this.setState({
      perPage: this.state.perPage + 8
    });
  };

  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevState) {
    if (this.state.category !== prevState.category) {
      this.getData();
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
              <ul
                className="portfolio__filters-list"
                onClick={this.clickHandler}
              >
                <li data-value="fashion">
                  <span>&#8226;</span>fashion
                </li>
                <li data-value="nature">
                  <span>&#8226;</span>nature
                </li>
                <li data-value="backgrounds">
                  <span>&#8226;</span>backgrounds
                </li>
                <li data-value="science">
                  <span>&#8226;</span>science
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
                <li data-value="backgrounds">
                  <span>&#8226;</span>backgrounds
                </li>
              </ul>
            </div>
          </div>
          <PortfolioItem
            filteredImages={this.state.filteredImages}
            data={this.state.data}
            value={this.state.value}
          ></PortfolioItem>
          <div className="potfolio__box box">
            <Line></Line>
            <p className="portfolio__btn" onClick={this.getMoreResults}>
              BROWSE MORE
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
