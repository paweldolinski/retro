import React from "react";

const PortfolioItem = props => {
  let elo;
  if (props.search) {
    elo = props.search.map(image => {
      return (
        <div className="portfolio__portfolio">
          <div className="portfolio__portfolio-item item">
            <div className="portfolio__image">
              <img src={image.previewURL} alt="" />
            </div>
            <div className="portfolio__caption">
              <div className="portfolio__caption-icon">
                <img
                  src={require("../assets/img/portfolio-icons/icons_542.png")}
                  alt=""
                />
              </div>
              <p>GALLERIES ARE FUNNY</p>
            </div>
          </div>
        </div>
      );
    });
  }
  return <div>{elo}</div>;
};

export default PortfolioItem;
