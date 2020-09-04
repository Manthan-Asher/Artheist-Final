import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./MobileNavbar.css";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

const MobileNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar((showNavbar) => !showNavbar);
    // console.log(showNavbar)
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };
  const handleSignupOpen = () => {
    setSignupOpen(true);
  };

  const handleSignupClose = () => {
    setSignupOpen(false);
  };

  var navBarClasses = "sideNavigation";
  navBarClasses += showNavbar ? " showNavbar" : "";

  return (
    <div className="mobileNavbar">
      <div className="mobileNavBarToggle">
        <button onClick={toggleNavbar}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>
      <div className={navBarClasses}>
        <div>
          <div className="MobileNavBtnContainer">
            <button className="signupBtn" onClick={handleSignupOpen}>
              Sign Up
            </button>
            <button className="loginBTN" onClick={handleLoginOpen}>
              Log In
            </button>
          </div>
          <p>
            <a href="" alt="navlinks">
              Feed
            </a>
          </p>
          <p>
            {/* <Link to="/contest"> */}
              <a href="/contest" alt="navlinks">
                Contest
              </a>
            {/* </Link> */}
          </p>
          <p>
            <a href="" alt="navlinks">
              Create Contest
            </a>
          </p>
          <p>
            <a href="/aboutUs" alt="navlinks">
              About Us
            </a>
          </p>
          <p>
            <a href="/contactUs" alt="navlinks">
              Contact Us
            </a>
          </p>
          {/* <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              Contact Us <i className="fa fa-caret-down" aria-hidden="true"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Link to="/aboutUs" className="navLink">
                <Dropdown.Item href="aboutUs">About Us</Dropdown.Item>
              </Link>
              <Dropdown.Item href="#/action-2">What we do ?</Dropdown.Item>
              <Link to="/howItWorks" className="navLink">
                <Dropdown.Item href="howItWorks">How It Works?</Dropdown.Item>
              </Link>
              <Dropdown.Item href="#/action-3">Testimonials</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Contact Us</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
        </div>
      </div>
      {loginOpen ? (
        <Login handleClose={handleLoginClose} openButton={loginOpen} />
      ) : null}
      {signupOpen ? (
        <Signup handleClose={handleSignupClose} openButton={signupOpen} />
      ) : null}
    </div>
  );
};

export default MobileNavbar;
