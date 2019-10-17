import React from 'react';
import Line from "./Line";
import image from "../assets/img/blog-image.png"

const BlogItem = () => {
  return (
    <div className="blog__item">
      <div className="blog__item-img">
        <img src={image} alt="microphone"></img>
      </div>
      <div className="blog__item-text">
        <div className="blog__item-title">
          <h2>The magic wheel</h2>
          <p>JULY 21 // ADMIN // FUN, TRAVEL, TRENDS</p>
          <Line></Line>
        </div>
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