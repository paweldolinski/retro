import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import PortfolioImage from "./PortfolioImage";

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

  limitTags = title => {
    let newTitle = [];
    newTitle = title
      .split(", ")
      .slice(0, 2)
      .join(", ");
    return newTitle;
  };

  render() {
    const { currentImg, open } = this.state
    return (
      <div className="portfolio__portfolio">
        <PortfolioImage
          filteredData={this.props.filteredData}
          moreItems={this.props.moreItems}
          limitTags={this.limitTags}
          handleOpen={this.handleOpen} />
        <div className="portfolio__after-click" onClick={this.handleClose}>
          <Dialog open={open}>
            <div className="portfolio__close-icon" onClick={this.handleClose}>
              &times;
            </div>
            <img src={currentImg} alt="" />
          </Dialog>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
