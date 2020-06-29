import React, {Component} from "react";
import Slider from "react-slick";
import "./carousel.css";

import ccc from "../../assets/carousal_demo.png";

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
      // dots: true,
      // dotsClass: "slick-dots slick-thumb",
      variableWidth: true,
      waitForAnimate: false,
      pauseOnHover: true,
      cssEase: "ease",
    };
    return (
      <div className="carouselContainer">
        <Slider {...settings}>
          <div className="contestPoster">
            <img src={ccc}></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">Participate Now</button>
            </div>
          </div>
          <div className="contestPoster">
            <img src="https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">Participate Now</button>
            </div>
          </div>
          <div className="contestPoster">
          <img src="https://images.unsplash.com/photo-1474308305481-198184645d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">Participate Now</button>
            </div>
          </div>
          <div className="contestPoster">
          <img src="https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">Participate Now</button>
            </div>
          </div>
          <div className="contestPoster">
          <img src="https://images.unsplash.com/photo-1474308305481-198184645d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">Participate Now</button>
            </div>
          </div>
          <div className="contestPoster">
          <img src="https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></img>
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
