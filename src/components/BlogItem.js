import React from 'react';
import Line from "./Line";
import image from "../assets/img/blog-image.png"

const BlogItem = () => {
  return (
    <div className="blog__item">
      <div className="blog__wrapper-img">
        <img className="blog__img" src={image} alt="microphone"></img>
      </div>
      <div className="blog__item-text">

        <h2 className="blog__item-title">The magic wheel</h2>
        <p className="blog__item-date"> JULY 21 // ADMIN // FUN, TRAVEL, TRENDS</p>
        <Line></Line>

        <div className="blog__item-article">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur quia adipisci non voluptate aut tempore aspernatur
          ut odio, itaque repellendus iusto. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptate dolores magni ad
          voluptatem corporis repudiandae sunt, laboriosam culpa maxime
          adipisci ipsa!
         </div>
      </div>
    </div>
  );
}

export default BlogItem;