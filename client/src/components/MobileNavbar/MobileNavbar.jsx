import React, { useState } from 'react';
import { Dropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./MobileNavbar.css";


const MobileNavbar = () => {

    const [ showNavbar, setShowNavbar ] = useState(false);

    const toggleNavbar = () => {
        setShowNavbar((showNavbar) => !showNavbar)
        // console.log(showNavbar)
    }
    
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
                        <button className="signupBtn">Sign Up</button>
                        <button className="loginBTN">Log In</button>
                    </div>
                    <p><a href="" alt="navlinks">Feed</a></p>
                    <p>
                        <Link to="/contest">
                                <a href="" alt="navlinks">Contest</a>
                        </Link>
                    </p>
                    <p><a href="" alt="navlinks">Create Contest</a></p>
                    <p><a href="" alt="navlinks">Artists</a></p>
                    <Dropdown>
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    More <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Link to="/aboutUs" className="navLink">
                      <Dropdown.Item href="aboutUs">About Us</Dropdown.Item>
                    </Link>
                    <Dropdown.Item href="#/action-2">
                      What we do ?
                    </Dropdown.Item>
                    <Link to="/howItWorks" className="navLink">
                      <Dropdown.Item href="howItWorks">How It Works?</Dropdown.Item>
                    </Link>
                    <Dropdown.Item href="#/action-3">
                      Testimonials
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4">Contact Us</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>
        </div>
     );
}
 
export default MobileNavbar;