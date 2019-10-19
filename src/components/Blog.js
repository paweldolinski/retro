import React from "react";
import Separator from "./Separator";
import Line from "./Line";
import BlogItem from './BlogItem'

const Blog = () => {
  return (
    <section className="blog section" id="my-blog">
      <div className="container">
        <div className="blog__box box">
          <div className="blog__box title">
            <h1>MY BLOG</h1>
            <Separator></Separator>
            <p className="title__subtitle">NEWS FROM MY HOUSE</p>
          </div>
        </div>
        <div className="blog__box box">
          <BlogItem />
        </div>
        <div className="blog__box box">
          <div className="blog__btn">
            <Line className={"line"} />
            <p>SHOW ALL POSTS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
