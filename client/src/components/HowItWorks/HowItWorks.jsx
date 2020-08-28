import React from "react";
import "./HowItWorks.css";
import user from "../../assets/user.svg";
import magnifier from "../../assets/magnifier.svg";
import enter from "../../assets/enter.svg";
import upload from "../../assets/upload.svg";  

const HowItWorks = () => {
  return (
    <div className="ddd">
    <div className="how-it-works">
      <h1>How It Works ?</h1>
      <div className="step">
        <div className="step-icon">
          {/* <img src={Profile} /> */}
          <img src={user} alt="icons" />
        </div>
        <div className="step-content">
          <h4>Create Your Profile</h4>
          <p>
            To begin your artistic journey, you need to first create your profile on Artheist.in
          </p>
          <button>Button</button>
        </div>
      </div>
      <div className="step">
        <div className="step-icon" >
          <img src={magnifier} alt="icons" />
        </div>
        <div className="step-content">
          <h4>Explore Contests</h4>
          <p>
            As soon as you sign in, you will be able to browse through the ongoing Contests
          </p>
           <button>Button</button>
        </div>
      </div>
      <div className="step">
        <div className="step-icon">
          <img src={enter} alt="icons" />
        </div>
        <div className="step-content">
          <h4>Register For Contests</h4>
          <p>
          Select the contest that is most appealing to you &amp; click on the Enter Contest to register yourself.
          </p>
           <button>Button</button>
        </div>
      </div>
      <div className="step">
        <div className="step-icon">
          <img src={upload} alt="icons" />
        </div>
        <div className="step-content">
          <h4>Submit Your Work</h4>
          <p>
          Now finally you need to submit your work,
           you can just sit back and share your performance to as many people as possible.
          </p>
           <button>Button</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HowItWorks;
