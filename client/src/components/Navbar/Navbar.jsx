import React, {Component} from "react";
import {Nav, Navbar, Dropdown, Button} from "react-bootstrap";
import "./Navbar.css";
import {Link} from "react-router-dom";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

class NavBar extends Component {
  state = {loginOpen: false, signupOpen: false};

  handleLoginOpen = () => {
    this.setState({loginOpen: true});
  };

  handleLoginClose = () => {
    this.setState({loginOpen: false});
  };
  handleSignupOpen = () => {
    this.setState({signupOpen: true});
  };

  handleSignupClose = () => {
    this.setState({signupOpen: false});
  };

  render() {
    return (
      <>
        <div>
          <Navbar bg="info" expand="lg" className="navBar fixed-top">
            <Link to="/">
              <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/logo1.jpeg" alt="logo" className="logo-img" />
              <Navbar.Brand className="navbar-brand">artHeist</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />


            <MobileNavbar />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-5 mr-auto">     
                <Link to="/userProfile" className="navLink" style={{color: "inherit"}}>
                  <Nav.Link href="/feed" className="mb4">
                    Feed
                  </Nav.Link>
                </Link>               
                <Link to="/contest" className="navLink">
                  <Nav.Link href="/contests" to="/contest">
                    Contest
                  </Nav.Link>
                </Link>
                <Nav.Link href="/createContest">Create Contest</Nav.Link>
                <Link to="/profileChange" className="navLink" style={{color: "inherit"}}>
                  <Nav.Link href="/artists">
                    Artists
                  </Nav.Link>
                </Link>
                <Dropdown>
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    <i className="fa fa-bars" aria-hidden="true"></i>
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
              </Nav>
              <Button
                variant="outline"
                onClick={this.handleSignupOpen}
                className="signUpBtn"
              >
                Sign Up
              </Button>
              <Button
                variant="outline"
                onClick={this.handleLoginOpen}
                className="loginBtn"
              >
                Login
              </Button>
            </Navbar.Collapse>
          </Navbar>
          {this.state.loginOpen ? (
            <Login
              handleClose={this.handleLoginClose}
              openButton={this.state.loginOpen}
            />
          ) : null}
          {this.state.signupOpen ? (
            <Signup
              handleClose={this.handleSignupClose}
              openButton={this.state.signupOpen}
            />
          ) : null}
        </div>
      </>
    );
  }
}

export default NavBar;
