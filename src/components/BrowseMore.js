import React from "react";
import Line from "./Line";

const BrowseMore = props => {
  const { getMoreResults, isMoreItems } = props
  return (
    <div className="potfolio__box box">
      <Line className={"line"} />
      <p className={isMoreItems ? "portfolio__btn" : "portfolio__btn portfolio__btn-disabled"} onClick={getMoreResults}>
        BROWSE MORE
      </p>
    </div>
  );
};

export default BrowseMore;
