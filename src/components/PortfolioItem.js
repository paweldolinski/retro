import React from "react";

const PortfolioItem = ({ img, alt, icon, title }) => {
  return (
    <div className="portfolio__portfolio-item item">
      <div className="portfolio__image">
        <img src={img} alt={alt} />
      </div>
      <div className="portfolio__caption">
        <div className="portfolio__caption-icon">
          <img src={icon} alt={alt} />
        </div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
