import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";

class PortfolioItem extends Component {
  state = {
    open: false,
    currentImg: ""
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
  render() {
    let renderList;
    if (this.props.data) {
      renderList = this.props.data.map(image => {
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
              <p>{image.tags}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="portfolio__portfolio">
        {renderList}
        <div className="portfolio__after-click" onClick={this.handleClose}>
          <Dialog open={this.state.open}>
            <div className="portfolio__close-icon" onClick={this.handleClose}>
              &times;
            </div>
            <img src={this.state.currentImg} alt="" />
          </Dialog>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
