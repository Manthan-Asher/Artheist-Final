import React, {Component} from "react";
import {Nav, Navbar, Dropdown, Button} from "react-bootstrap";
import "./Navbar.css";
import Login from "../Login/Login";

class NavBar extends Component {
  state = {open: false};

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    return (
      <>
        <Navbar bg="info" expand="lg">
          <Navbar.Brand href="#home">artHeist</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="mb4">
                Feed
              </Nav.Link>
              <Nav.Link href="#link">Contest</Nav.Link>
              <Nav.Link href="#home">Create Contest</Nav.Link>
              <Nav.Link href="#link">Artists</Nav.Link>
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
            <Button variant="danger">Sign Up</Button>
            <Button variant="outline" onClick={this.handleOpen}>
              Login
            </Button>
          </Navbar.Collapse>
        </Navbar>
        {this.state.open ? (
          <Login handleClose={this.handleClose} openButton={this.state.open} />
        ) : null}
      </>
    );
  }
}

export default NavBar;
