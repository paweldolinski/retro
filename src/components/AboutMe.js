import React from "react";
import Separator from "./Separator";
import Line from "./Line";

const AboutMe = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__box box">
            <div className="about__title title">
              <h1>ABOUT ME</h1>
              <Separator></Separator>
              <p>I AM A GRAPHIC DESIGNER FROM BALTIMORE</p>
            </div>
          </div>
          <div className="about__box box">
            <div className="about__item-wrapper">
              <div className="about__item item">
                <div className="about__item-img">
                  <img
                    src={require("../assets/img/about-1_1.png")}
                    alt="movies icon"
                  ></img>
                </div>
                <h2 className="about__item-title">MOVIES</h2>
                <h3 className="about__item-subtitle">WHAT I WATCH</h3>
                <Line />
                <div className="about__item-text">
                  Clutter is honest! I do believe that has to the users{" "}
                  <span className="about__item-text--bold">selfexpression</span>{" "}
                  Care. Things which is a projector operating system such
                  formats are deep and profound and meaningful. It's the
                  traditions of data.{" "}
                  <span className="about__item-text--underline">
                    Good design
                  </span>{" "}
                  should be different levels. There's no rational alternative.
                  That's come to complexity.
                </div>
              </div>
              <div className="about__item item">
                <div className="about__item-img">
                  <img
                    src={require("../assets/img/about-1_3.png")}
                    alt="movies icon"
                  ></img>
                </div>
                <h2 className="about__item-title">MUSIC</h2>
                <h3 className="about__item-subtitle">WHAT I LISTEN</h3>
                <Line />
                <div className="about__item-text">
                  Good design. The content, you'll love{" "}
                  <span className="about__item-text--bold">
                    powerpoint should be different.
                  </span>{" "}
                  It's about design is that part? Good design is making
                  something looks. And aesthetic. And colour defines your
                  interface. That cannot be overtly different. That has to
                  chance. And restrained, low resolution, but you get rid of
                  materials.
                </div>
              </div>
              <div className="about__item item">
                <div className="about__item-img">
                  <img
                    src={require("../assets/img/about-1_4.png")}
                    alt="movies icon"
                  ></img>
                </div>
                <h2 className="about__item-title">CLOTHES</h2>
                <h3 className="about__item-subtitle">WHAT I WEAR</h3>
                <Line />
                <div className="about__item-text">
                  Very honest approach and product. The{" "}
                  <span className="about__item-text--underline">
                    other product
                  </span>{" "}
                  that changes function like the absence of function. And
                  frustrating that products that it's the functional imperative,
                  we kept going and frustrating that we are about bringing order
                  to be better and less complicated to understand.
                </div>
              </div>
              <div className="about__item item">
                <div className="about__item-img">
                  <img
                    src={require("../assets/img/about-1_2.png")}
                    alt="movies icon"
                  ></img>
                </div>
                <h2 className="about__item-title">FOOD</h2>
                <h3 className="about__item-subtitle">WHAT I EAT</h3>
                <Line />
                <div className="about__item-text">
                  Simplicity. Its context. From so many different levels.
                  There's real simplicity is. Designing and place of the objects
                  we're surrounded by seem trivial. There's{" "}
                  <span className="about__item-text--bold">
                    {" "}
                    no rational alternative.
                  </span>
                  I think that's a very complicated problems without letting
                  people have a very easy to mean so much that acknowledges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
