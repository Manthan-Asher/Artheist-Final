import React from "react";
import "./HowItWorks.css";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="ddd">
      <div className="how-it-works">
        <h1>How It Works ?</h1>
        <div className="step">
          <div className="step-icon">
            {/* <img src={Profile} /> */}
            <img
              src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/user.svg"
              alt="icons"
            />
          </div>
          <div className="step-content">
            <h4>Create Your Profile</h4>
            <p>
              To begin your artistic journey, you need to first create your
              profile on Artheist.in
            </p>
            <button>
              Register Now

              {/* TODO: signup Popup Box*/}

            </button>
          </div>
        </div>
        <div className="step">
          <div className="step-icon">
            <img
              src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/magnifier.svg"
              alt="icons"
            />
          </div>
          <div className="step-content">
            <h4>Explore Contests</h4>
            <p>
              As soon as you sign in, you will be able to browse through the
              ongoing Contests
            </p>
            <button>  
              <Link to="/contest">Active Contests</Link>
            </button>
          </div>
        </div>
        <div className="step">
          <div className="step-icon">
            <img
              src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/enter.svg"
              alt="icons"
            />
          </div>
          <div className="step-content">
            <h4>Register For Contests</h4>
            <p>
              Select the contest that is most appealing to you &amp; click on
              the Enter Contest to register yourself.
            </p>
            <button>
              <Link to="/contest">Enter Contest</Link>
            </button>
          </div>
        </div>
        <div className="step">
          <div className="step-icon">
            <img
              src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/upload.svg"
              alt="icons"
            />
          </div>
          <div className="step-content">
            <h4>Submit Your Work</h4>
            <p>
              Now finally you need to submit your work, you can just sit back
              and share your performance to as many people as possible.
            </p>
            <button>     
              <Link to="/contest">Browse Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
