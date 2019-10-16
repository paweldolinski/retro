import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import BrowseMore from "./BrowseMore";

class PortfolioItem extends Component {
  state = {
    open: false,
    filteredData: [],
    currentImg: "",
    moreItems: 8
  };

  handleOpen = img => {
    this.setState({
      open: true,
      currentImg: img
    });
  };

  handleClose = e => {
    this.setState({
      open: false
    });
    if (e.target.tagName === "IMG") {
      this.setState({
        open: true
      });
    }
  };

  getMoreResults = () => {
    const { filteredData } = this.props
    if (filteredData) {
      this.setState(prev => {
        return {
          moreItems: prev.moreItems + 4
        };
      });
    }
  };

  limitTags = title => {
    let newTitle = [];
    newTitle = title
      .split(", ")
      .slice(0, 2)
      .join(", ");
    return newTitle;
  };

  renderList = () => {
    const { filteredData, moreItems } = this.state
    let renderList;
    if (filteredData) {
      renderList = filteredData
        .slice(0, moreItems)
        .map(image => {
          return (
            <div className="portfolio__portfolio-item item" key={image.id}>
              <div
                className="portfolio__image"
                onClick={() => this.handleOpen(image.largeImageURL)}
              >
                <img src={image.largeImageURL} alt="" />
              </div>
              <div className="portfolio__caption">
                <div className="portfolio__caption-icon">
                  <img
                    src={require("../assets/img/portfolio-icons/icons_542.png")}
                    alt={image.tags}
                  />
                </div>
                <p>{this.limitTags(image.tags)}</p>
              </div>
            </div>
          );
        });
    }
    return renderList;
  };

  static getDerivedStateFromProps(props) {
    return {
      filteredData: props.filteredData
    };
  }
  render() {
    const { currentImg, open } = this.state
    return (
      <div className="portfolio__portfolio">
        {this.renderList()}
        <div className="portfolio__after-click" onClick={this.handleClose}>
          <Dialog open={open}>
            <div className="portfolio__close-icon" onClick={this.handleClose}>
              &times;
            </div>
            <img src={currentImg} alt="" />
          </Dialog>
        </div>
        <BrowseMore getMoreResults={this.getMoreResults}></BrowseMore>
      </div>
    );
  }
}

export default PortfolioItem;
