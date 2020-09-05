import React, {Component} from "react";
import Slider from "react-slick";
import "./carousel.css";
import MobileCarousel from "../MobileCarousel/MobileCarousel";
import { Link } from "react-router-dom";

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
        <MobileCarousel />

        <div className="contentBelowMobileCarousel">
            <h1 className="h1-seo fade-in"  
            style={{fontWeight:300}}>Welcome to <span style={{fontWeight:600}}>Artheist.in </span>!</h1>
            <p className="intro fade-in" style={{fontWeight:300}}>
              The platform where we help people to pursue their creative interests.
            </p>
        </div>


        <Slider {...settings}>
          <div className="contestPoster">
            <img
              src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/carousal_demo.png"
              alt="carouselPhoto"
            ></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">
                <Link to="/contest">Participate Now</Link>
              </button>
            </div>
          </div>
          <div className="contestPoster">
            <img
              src="https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="contestPoster"
            ></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">
                <Link to="/contest">Participate Now</Link>
              </button>
            </div>
          </div>
          <div className="contestPoster">
            <img
              src="https://images.unsplash.com/photo-1474308305481-198184645d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="contestPoster"
            ></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">
                <Link to="/contest">Participate Now</Link>
              </button>
            </div>
          </div>
          <div className="contestPoster">
            <img
              src="https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="contestPoster"
            ></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">
                <Link to="/contest">Participate Now</Link>
              </button>
            </div>
          </div>
          <div className="contestPoster">
            <img
              src="https://images.unsplash.com/photo-1474308305481-198184645d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
              alt="contestPoster"
            ></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">
                <Link to="/contest">Participate Now</Link>
              </button>
            </div>
          </div>
          <div className="contestPoster">
            <img
              src="https://images.unsplash.com/photo-1474308371634-c715850e8d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="contestPoster"
            ></img>
            <div>
              <h4>Active Contest</h4>
              <button className="participateBtn">
                <Link to="/contest">Participate Now</Link>
              </button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
