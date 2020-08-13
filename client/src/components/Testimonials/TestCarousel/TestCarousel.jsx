import React from "react";
import "./TestCarousel.css";
import { Carousel } from "react-bootstrap";



function TestCarousel() {
  return (
    <div className="Carousel">
      <Carousel interval={10000}>
        <Carousel.Item>
          <img
            className="bannerSize img-fluid"
            src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/testPhoto.png"
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
            src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/testPhoto.png"
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
            src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/testPhoto.png"
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
