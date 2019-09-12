import React, { Component } from "react";
import Slider from "react-slick";

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
                <div className="sliderSection__slider-item">
                  <img
                    src={require("../assets/img/slider/img1.png")}
                    alt="slider amplifier"
                  />
                </div>
                <div className="sliderSection__slider-item">
                  <img
                    src={require("../assets/img/slider/img2.png")}
                    alt="slider analogue"
                  />
                </div>
                <div className="sliderSection__slider-item">
                  <img
                    src={require("../assets/img/slider/img3.png")}
                    alt="slider music"
                  />
                </div>
              </Slider>
              <div
                className="sliderSection__prev-button"
                onClick={this.previous}
              >
                <img src={require("../assets/img/left-thin-chevron.png")} />
              </div>
              <div className="sliderSection__next-button" onClick={this.next}>
                <img src={require("../assets/img/right-thin-chevron.png")} />
              </div>
              <h2>KODAK CAMERA</h2>
            </div>
          </div>
          <div className="sliderSection__box">
            <h2>“HELLO, I AM JOHN DOE</h2>
            <h2>WELCOME TO RETRO, MY WONDERFUL THEME!”</h2>
          </div>
        </div>
      </section>
    );
  }
}
export default SliderSection;
