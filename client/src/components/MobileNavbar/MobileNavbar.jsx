import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import "./MobileNavbar.css";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import {connect} from "react-redux";
import {logout} from "../../actions/auth";

const MobileNavbar = ({auth, logout, history}) => {
  const [showNavbar, setShowNavbar] = useState(false);
  // const [loginOpen, setLoginOpen] = useState(false);
  // const [signupOpen, setSignupOpen] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar((showNavbar) => !showNavbar);
    // console.log(showNavbar)
  };

  // const handleLoginOpen = () => {
  //   setLoginOpen(true);
  // };

  // const handleLoginClose = () => {
  //   setLoginOpen(false);
  // };
  // const handleSignupOpen = () => {
  //   setSignupOpen(true);
  // };

  // const handleSignupClose = () => {
  //   setSignupOpen(false);
  // };

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
                  <i className="fas fa-user"></i>{" "}
                  Hi, {auth.user.firstName}
                </Link>
              </span>
              
            </div>
          ) : (
            <div className="MobileNavBtnContainer">
              <a href="/mobileSignUpPage" className="signupBtn">
                Sign Up
              </a>
              <a href="/mobileSignUpPage" className="loginBTN">
                Log In
              </a>
            </div>
          )}
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
            <a href="/createContest" alt="navlinks">
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
          { auth.isAuthenticated ? (
                <button
                className="logOutBtn"
                onClick={() => {
                  logout(history);
                }}
              >
                Logout
          </button>
          ) : null }
          
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logout})(withRouter(MobileNavbar));
