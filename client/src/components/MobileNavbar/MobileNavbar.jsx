import React, {useState} from "react";
import {Dropdown} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import "./MobileNavbar.css";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import {connect} from "react-redux";
import {logout} from "../../actions/auth";

const MobileNavbar = ({auth, logout, history}) => {
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
          {auth.isAuthenticated ? (
            <div className="MobileNavBtnContainer">
              <span className="userName">
                <Link
                  to="/userProfile"
                  className="navLink"
                  style={{color: "inherit"}}
                >
                  Hi, {auth.user.firstName}
                </Link>
              </span>
              <button
                className="signupBtn"
                onClick={() => {
                  logout(history);
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="MobileNavBtnContainer">
              <button className="signupBtn" onClick={handleSignupOpen}>
                Sign Up
              </button>
              <button className="loginBTN" onClick={handleLoginOpen}>
                Log In
              </button>
            </div>
          )}
          <p>
            <a href="" alt="navlinks">
              Feed
            </a>
          </p>
          <p>
            <Link to="/contest">
              <a href="" alt="navlinks">
                Contest
              </a>
            </Link>
          </p>
          <p>
            <a href="" alt="navlinks">
              Create Contest
            </a>
          </p>
          <p>
            <a href="/profileChange" alt="navlinks">
              Artists
            </a>
          </p>
          <Dropdown>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              More <i className="fa fa-caret-down" aria-hidden="true"></i>
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
          </Dropdown>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logout})(withRouter(MobileNavbar));
