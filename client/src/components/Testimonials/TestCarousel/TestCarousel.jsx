import React from "react";
import testPhoto from "../../../assets/testPhoto.png";
import "./TestCarousel.css";
import { Carousel } from "react-bootstrap";
function TestCarousel() {
  return (
    <div className="Carousel">
      <Carousel interval={10000}>
        <Carousel.Item>
          <img
            className="bannerSize img-fluid"
            src={testPhoto}
            alt="First slide"
          />
          <div>
              <h2>Some Person</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus at voluptates optio vero iste.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="bannerSize img-fluid"
            src={testPhoto}
            alt="Second slide"
          />
           <div>
              <h2>Some Person</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus at voluptates optio vero iste.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="bannerSize img-fluid"
            src={testPhoto}
            alt="Third slide"
          />
           <div>
              <h2>Some Person</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus at voluptates optio vero iste.</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TestCarousel;
