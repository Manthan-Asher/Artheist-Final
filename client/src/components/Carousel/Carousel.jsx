import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.css";

import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";
import four from "../../assets/4.jpg";
import five from "../../assets/5.jpg";
import six from "../../assets/6.jpg";

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 15000,
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      variableWidth: true,
      waitForAnimate: false,
      pauseOnHover: true,
      cssEase: "ease",
    };
    return (
      <div className="carouselContainer">
        <h2>Cover Flow Carousel</h2>
        <Slider {...settings}>
          <div className="contestPoster">
            <img src={one}></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">Participate Now</button>
            </div>
          </div>
          <div className="contestPoster">
            <img src={two}></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">Participate Now</button>
            </div>
          </div>
          <div className="contestPoster">
            <img src={three}></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">Participate Now</button>
            </div>
          </div>
          <div className="contestPoster">
            <img src={four}></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">Participate Now</button>
            </div>
          </div>
          <div className="contestPoster">
            <img src={five}></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">Participate Now</button>
            </div>
          </div>
          <div className="contestPoster">
            <img src={six}></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">Participate Now</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
