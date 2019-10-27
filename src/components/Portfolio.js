import React, { Component } from "react";
import Separator from "./Separator";
import PortfolioItem from "./PortfolioItem";
import BrowseMore from "./BrowseMore";
import Constants from "../data/Constants";
import TagsList from "./TagsList"

class Portfolio extends Component {
  state = {
    data: [],
    filteredData: [],
    moreItems: 8,
    isMoreItems: true,
    images: []
  };

  filterData = (tag) => {
    this.setState({
      filteredData: this.state.data.filter(image =>
        image.tags.includes(tag)
      )
    }, () => {
      this.disabledGetMoreResults()
    });

    if (this.state.moreItems > 8) {
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
      }, () => {
        this.disabledGetMoreResults()
      });
    }
  };

  disabledGetMoreResults = () => {
    const { moreItems, filteredData } = this.state
    if (moreItems >= filteredData.length) {
      this.setState({
        isMoreItems: false
      })
    } else {
      this.setState({
        isMoreItems: true
      })
    }
  }

  getData = async () => {
    const { apiKEY, apiURL } = Constants

    await fetch(
      `${apiURL}/?key=${apiKEY}&q=retro&image_type=photo&per_page=200&category=music`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.hits,
          filteredData: data.hits,
          images: data.hits.map(img => img.largeImageURL)
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {

    this.getData();

  }

  render() {
    const { filteredData, moreItems, isMoreItems } = this.state
    return (
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="portfolio__box box">
            <div className="portfolio__title title">
              <h1>PORTFOLIO</h1>
              <Separator></Separator>
              <p className="title__subtitle">SIMPLICITY IS THE ULTIMATE SOPHISTICATION</p>
            </div>
          </div>
          <div className="potfolio__box box">
            <div className="portfolio__filters">
              <p className="portfolio__filters-title">Filter by</p>
              <ul className="portfolio__filters-list">
                <TagsList filterData={this.filterData} />
              </ul>
            </div>
          </div>
          <div className="portfolio__portfolio">
            {filteredData.slice(0, moreItems).map(item => {
              return <PortfolioItem key={item.id} images={this.state.images} {...item} />
            })}
          </div>
        </div>
        <BrowseMore getMoreResults={this.getMoreResults} isMoreItems={isMoreItems}></BrowseMore>
      </section>
    );
  }
}

export default Portfolio;
