import React from 'react';
import Line from "./Line";
import Constants from "../data/Constants"

const BlogItem = () => {
  const { blogItem } = Constants
  return (
    <React.Fragment>
      {blogItem.map((item, index) => {
        return (
          <div className="blog__item" key={index}>
            <div className="blog__wrapper-img">
              <img className="blog__img" src={item.img} alt="/"></img>
            </div>
            <div className="blog__item-text">
              <h2 className="blog__item-title">{item.title}</h2>
              <p className="blog__item-date"> {item.date}</p>
              <Line className={'line-left'} />
              <div className="blog__item-article">{item.article}</div>
            </div>
          </div>
        )
      })}
    </React.Fragment>



  );
}

export default BlogItem;