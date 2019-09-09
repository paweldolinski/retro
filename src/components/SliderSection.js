import React, { Component } from "react";
import Slider from "react-slick";

class SliderSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="sliderSection">
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
              <Slider>
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
