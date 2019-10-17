import React from "react";
import Separator from "./Separator";
import AboutMeItem from "./AboutMeItem";

const AboutMe = () => {
  return (
    <section className="about section" id="about-me">
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
              <AboutMeItem
                img={require("../assets/img/about-1_1.png")}
                alt={"movies"}
                title="MOVIES"
                subtitle='WHAT I WATCH'
              >
                  Clutter is honest! I do believe that has to the users
                  <strong>
                     {" "}selfexpression{" "}
                  </strong>
                  Care. Things which is a projector operating system such
                  formats are deep and profound and meaningful. It's the
                  traditions of data.
                  <u>
                  {" "} Good design{" "}
                  </u>
                  should be different levels. There's no rational alternative.
                  That's come to complexity.
              </AboutMeItem>
              <AboutMeItem
                img={require("../assets/img/about-1_3.png")}
                alt={"music"}
                title="MUSIC"
                subtitle='WHAT I LISTEN'
              >
                  Good design. The content, you'll love
                  <strong>
                  {" "}powerpoint should be different.{" "}
                  </strong>
                  It's about design is that part? Good design is making
                  something looks. And aesthetic. And colour defines your
                  interface. That cannot be overtly different. That has to
                  chance. And restrained, low resolution, but you get rid of
                  materials.
              </AboutMeItem>
              <AboutMeItem
                img={require("../assets/img/about-1_4.png")}
                alt={"clothes"}
                title="CLOTHES"
                subtitle='WHAT I WEAR'
              >
                  Very honest approach and product. The
                  <u>
                  {" "} other product{" "}
                  </u>
                  that changes function like the absence of function. And
                  frustrating that products that it's the functional imperative,
                  we kept going and frustrating that we are about bringing order
                  to be better and less complicated to understand.
              
              </AboutMeItem>
              <AboutMeItem
                img={require("../assets/img/about-1_2.png")}
                alt={"food"}
                title="FOOD"
                subtitle='WHAT I EAT'
              >
                  Simplicity. Its context. From so many different levels.
                  There's real simplicity is. Designing and place of the objects
                  we're surrounded by seem trivial. There's
                  <strong>
                  {" "}  no rational alternative.{" "}
                  </strong>
                  I think that's a very complicated problems without letting
                  people have a very easy to mean so much that acknowledges.
              </AboutMeItem>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
