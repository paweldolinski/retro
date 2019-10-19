import React from "react";
import Separator from "./Separator";
import AboutMeItem from "./AboutMeItem";
import Constants from '../data/Constants'

const AboutMe = () => {
  const { aboutMe } = Constants
  return (
    <section className="about section" id="about-me">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__box box">
            <div className="about__title title">
              <h1>ABOUT ME</h1>
              <Separator></Separator>
              <p className="title__subtitle">I AM A GRAPHIC DESIGNER FROM BALTIMORE</p>
            </div>
          </div>
          <div className="about__box box">
            <div className="about__item-wrapper">
              {aboutMe.map((item, index) => {
                return <AboutMeItem img={item.img} alt={item.alt} title={item.title} subtitle={item.subtitle} text={item.text} key={index} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
