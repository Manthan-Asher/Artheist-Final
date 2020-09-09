import React, {Component} from "react";
import {Nav, Navbar, Dropdown, Button} from "react-bootstrap";
import "./Navbar.css";
import {Link, withRouter} from "react-router-dom";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import {connect} from "react-redux";
import {logout} from "../../actions/auth";

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
              <img
                src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/logo1.jpeg"
                alt="logo"
                className="logo-img"
              />
              <Navbar.Brand className="navbar-brand">artHeist</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <MobileNavbar />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-5 mr-auto">
                <Nav.Link href="/feed" className="mb4">
                  Feed
                </Nav.Link>
                <Link to="/contest" className="navLink">
                  <Nav.Link href="/contests" to="/contest">
                    Contest
                  </Nav.Link>
                </Link>
                <Nav.Link href="/createContest">Create Contest</Nav.Link>
                <Link to="/aboutUs" className="navLink">
                      <Nav.Link href="/aboutUs">About Us</Nav.Link>
                </Link>
                <Dropdown>
                  <Dropdown.Toggle variant="none" id="dropdown-basic">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/artists">
                      Artists
                    </Dropdown.Item>
                    <Dropdown.Item href="/contactUs">
                      Contact Us
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              {this.props.auth.isAuthenticated ? (
                <>
                  <span className="userName">    
                    <Link
                      to="/userProfile"
                      className="navLink"
                      style={{color: "inherit"}}
                    >
                      <i className="fas fa-user"></i>{" "}
                      Hi, {this.props.auth.user.firstName}
                    </Link>
                  </span>
                  <Button
                    variant="outline"
                    className="logoutBtn"
                    onClick={() => {
                      this.props.logout(this.props.history);
                    }}
                  >
                    <Link to="/" style={{color: "inherit"}}>
                      Logout
                    </Link>
                  </Button>
                </>
              ) : (
                <>
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
                </>
              )}
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logout})(withRouter(NavBar));
