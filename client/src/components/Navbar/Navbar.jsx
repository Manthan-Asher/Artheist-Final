import React, {Component} from "react";
import {Nav, Navbar, Dropdown, Button} from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";

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
        {/* <Navbar bg="dark" expand="lg">
                */}
      <div>
        <Navbar bg="info" expand="lg">
          <Link to="/" >
            <Navbar.Brand href="#home">artHeist</Navbar.Brand>
          </Link> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#feed" className="mb4">
                Feed
              </Nav.Link>
              <Link to="/contest" className="contest-link">
                <Nav.Link href="#contests" to="/contest">Contest</Nav.Link>
              </Link>
              <Nav.Link href="#createContest">Create Contest</Nav.Link>
              <Nav.Link href="#artists">Artists</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">About Us</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">What we do ?</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Creators</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Testimonials</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">Contact Us</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <Button variant="danger" onClick={this.handleSignupOpen}>Sign Up</Button>
            <Button variant="outline" onClick={this.handleLoginOpen}>
              Login
            </Button>
          </Navbar.Collapse>
        </Navbar>
        {this.state.loginOpen ? (
          <Login handleClose={this.handleLoginClose} openButton={this.state.loginOpen} />
        ) : null}
        {this.state.signupOpen ? (
          <Signup handleClose={this.handleSignupClose} openButton={this.state.signupOpen} />
        ) : null}
      </div>
      </>
    );
  }
}

export default NavBar;
