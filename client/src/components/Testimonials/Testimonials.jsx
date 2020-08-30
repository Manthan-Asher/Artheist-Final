import React from "react";
import "./Testimonials.css";
import TestCarousel from "./TestCarousel/TestCarousel";

const Testimonials = () => {
  return (
      <div className="testimonialContainer">
    <div className="testimonials">
      <h1 className="test-head">Testimonials</h1>
      <p className="test-para">
      One thing that we pride ourselves at artHeist is the satisfaction of our artists, and what better way to judge it than to hear from a few of our many super satisfied users. Have a look at some of their testimonials.

      </p>
      <div className="testVideoContainer">
        <div className="testVideoSlider">
        <video
          width="345"
          height="180"
          controls
          controlsList="nodownload"
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
          controlsList="nodownload"
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
          controlsList="nodownload"
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
          controlsList="nodownload"
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
          controlsList="nodownload"
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
          controlsList="nodownload"
          poster="https://387b72ivq1z3mni0n261y7l1-wpengine.netdna-ssl.com/wp-content/uploads/2016/11/app-store-video.jpg"
        >
          <source
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            type="video/mp4"
          />
        </video>
        </div>
      </div> 

        <TestCarousel />

     </div>
    </div>
  );
};

export default Testimonials;
