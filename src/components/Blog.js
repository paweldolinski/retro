import React from "react";
import Separator from "./Separator";
import Line from "./Line";

const Blog = () => {
  return (
    <section className="blog" id="my-blog">
      <div className="container">
        <div className="blog__box box">
          <div className="blog__box title">
            <h1>MY BLOG</h1>
            <Separator></Separator>
            <p>NEWS FROM MY HOUSE</p>
          </div>
        </div>
        <div className="blog__box box">
          <div className="blog__item">
            <div className="blog__item-img"></div>
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
          <div className="blog__item">
            <div className="blog__item-img"></div>
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
          <div className="blog__item">
            <div className="blog__item-img"></div>
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
          <div className="blog__item">
            <div className="blog__item-img"></div>
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
        </div>
        <div className="blog__btn">
          <Line></Line>
          <p>SHOW ALL POSTS</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
