import React, { Component } from "react";
import LightBox from "./LightBox"

class PortfolioItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      imagePopup: ''
    };
  }


  handleOpen = (imagePopup) => {
    this.setState({
      isOpen: true,
      imagePopup
    }, () => console.log(this.state.isOpen))

  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    }, () => console.log(this.state.isOpen))
  };

  limitTags = title => {
    let newTitle = [];
    newTitle = title
      .split(", ")
      .slice(0, 2)
      .join(", ");
    return newTitle;
  };
  componentDidUpdate(prevState) {

    if (this.state.isOpen) {
      document.body.style.overflowY = 'hidden';

    } else {
      document.body.style.overflowY = 'scroll';

    }

  }
  render() {
    const { id, tags, webformatURL } = this.props;
    const { imagePopup, isOpen } = this.state
    return (
      <div className="portfolio__portfolio-item item" key={id}>
        <div className="portfolio__wrapper-image" onClick={() => { this.handleOpen(webformatURL) }}>
          <img className="portfolio__image" src={webformatURL} alt="" />
        </div>
        {isOpen && (
          <LightBox image={imagePopup} close={this.handleClose} tags={tags} isOpen={isOpen} />
        )}
        <div className="portfolio__caption">
          <div className="portfolio__caption-icon">
            <img src={require("../assets/img/portfolio-icons/icons_542.png")} alt={tags} />
          </div>
          <p className="portfolio__caption-tags"> {this.limitTags(tags)}</p>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
