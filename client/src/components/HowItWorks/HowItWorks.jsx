import React from "react";
import "./HowItWorks.css";

  

const HowItWorks = () => {
  return (
    <div className="ddd">
    <div className="how-it-works">
      <h1>How It Works ?</h1>
      <div className="step">
        <div className="step-icon">
          {/* <img src={Profile} /> */}
          <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/profile2.gif" alt="icons" />
        </div>
        <div className="step-content">
          <h4>Head1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            impedit tempora eius repudiandae ut praesentium
          </p>
          <button>Button</button>
        </div>
      </div>
      <div className="step">
        <div className="step-icon" >
          <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/browse2.gif" alt="icons" />
        </div>
        <div className="step-content">
          <h4>Head2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            impedit tempora eius repudiandae ut praesentium
          </p>
           <button>Button</button>
        </div>
      </div>
      <div className="step">
        <div className="step-icon">
          <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/register2.gif" alt="icons" />
        </div>
        <div className="step-content">
          <h4>Head3</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            impedit tempora eius repudiandae ut praesentium
          </p>
           <button>Button</button>
        </div>
      </div>
      <div className="step">
        <div className="step-icon">
          <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/upload.gif" alt="icons" />
        </div>
        <div className="step-content">
          <h4>Head4</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            impedit tempora eius repudiandae ut praesentium
          </p>
           <button>Button</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HowItWorks;
