import React, { Component } from "react";
import Slider from "react-slick";
import Constants from '../data/Constants'
import SliderBtn from './SliderBtn'

class SliderSection extends Component {
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { sliderImages } = Constants
    return (
      <section
        className={
          this.props.isScrolled
            ? "slideSection section transform"
            : "slideSection section"
        }
      >
        <div className="container">
          <div className="sliderSection__box">
            <img
              className="sliderSection__title"
              src={require("../assets/img/retro-logo.png")}
              alt="logo slider"
            />
            <img
              className="sliderSection__title"
              src={require("../assets/img/old-style-portfolio.png")}
              alt="second logo slider"
            />
          </div>
          <div className="sliderSection__box">
            <div className="sliderSection__slider-wrapper">
              <Slider ref={c => (this.slider = c)} {...settings}>
                {sliderImages.map((image, index) => {
                  return (<div className="sliderSection__slider-item" key={index}>
                    <img src={image.img} alt={image.alt} />
                  </div>)
                })}
              </Slider>
              <SliderBtn className={"sliderSection__prev-button"}
                img={require("../assets/img/left-thin-chevron.png")}
                alt={"previous"} previous={this.previous}
              />
              <SliderBtn className={"sliderSection__next-button"}
                img={require("../assets/img/right-thin-chevron.png")}
                alt={"previous"}
                next={this.next}
              />
              <h2 className="sliderSection__subtitle">KODAK CAMERA</h2>
            </div>
          </div>
          <div className="sliderSection__box">
            <h2 className="sliderSection__subtitle" >“HELLO, I AM JOHN DOE</h2>
            <h2 className="sliderSection__subtitle" >WELCOME TO RETRO, MY WONDERFUL THEME!”</h2>
          </div>
        </div>
      </section>
    );
  }
}
export default SliderSection;
