import React from "react";
import "./Testimonials.css";
import TestCarousel from "./TestCarousel/TestCarousel";

const Testimonials = () => {
  return (
      <div className="testimonialContainer">
    <div className="testimonials">
      <h1 className="test-head">Testimonials</h1>
      <p className="test-para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        alias, iure fugit corrupti deserunt magni corporis cum aspernatur rem
        magnam veniam totam beatae dolorem facere impedit.
      </p>
      <div className="testVideoContainer">
        <video
          width="345"
          height="180"
          controls
          poster="https://387b72ivq1z3mni0n261y7l1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/app-store-video.jpg"
        >
          <source
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4"
          />
        </video>
        <video
          width="345"
          height="180"
          controls
          poster="https://387b72ivq1z3mni0n261y7l1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/app-store-video.jpg"
        >
          <source
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4"
          />
        </video>
        <video
          width="345"
          height="180"
          controls
          poster="https://387b72ivq1z3mni0n261y7l1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/app-store-video.jpg"
        >
          <source
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4"
          />
        </video>
      </div>
        <TestCarousel />

     </div>
    </div>
  );
};

export default Testimonials;
