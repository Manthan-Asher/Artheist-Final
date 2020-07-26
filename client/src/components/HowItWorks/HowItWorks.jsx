import React from "react";
import "./HowItWorks.css";
import Profile from "../../assets/profile2.gif";
import Browse from "../../assets/browse2.gif";
import Register from "../../assets/register2.gif";
import Upload from "../../assets/upload.gif";

  

const HowItWorks = () => {
  return (
    <div className="ddd">
    <div className="how-it-works">
      <h1>How It Works ?</h1>
      <div className="step">
        <div className="step-icon">
          {/* <img src={Profile} /> */}
          <img src={Profile} />
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
          <img src={Browse} />
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
          <img src={Register} />
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
          <img src={Upload} />
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
