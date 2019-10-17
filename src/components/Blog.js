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
            <p>NEWS FROM MY HOUSE</p>
          </div>
        </div>
        <div className="blog__box box">
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
          <BlogItem></BlogItem>
        </div>
        <div className="blog__box box">
          <div className="blog__btn">
            <Line></Line>
            <p>SHOW ALL POSTS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
