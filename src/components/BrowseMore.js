import React from "react";
import Line from "./Line";

const BrowseMore = props => {
  return (
    <div className="potfolio__box box">
      <Line></Line>
      <p className="portfolio__btn" onClick={props.getMoreResults}>
        BROWSE MORE
      </p>
    </div>
  );
};

export default BrowseMore;
