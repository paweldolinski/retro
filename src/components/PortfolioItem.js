import React from "react";

const PortfolioItem = props => {
  let renderList;
  if (props.search && props.value !== "all") {
    renderList = props.filteredImages.map(image => {
      return (
        <div className="portfolio__portfolio-item item">
          <div className="portfolio__image">
            <img src={image.previewURL} alt="" />
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
  } else if (props.search) {
    renderList = props.search.map(image => {
      return (
        <div className="portfolio__portfolio-item item">
          <div className="portfolio__image">
            <img src={image.previewURL} alt="" />
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
  return <div className="portfolio__portfolio">{renderList}</div>;
};

export default PortfolioItem;
