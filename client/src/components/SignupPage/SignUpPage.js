import React from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import "./SignUpPage.scss";

export default () => {
  return (
    <div style={{ backgroundColor: "#1B1C1D" }}>
      <Container>
        <br />
        <h1 style={{ color: "white" }}>SignUp</h1>
        <div
          style={{ display: "flex", justifyContent: "center", height: "20vh" }}
        >
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fzimphysio.org.zw%2Fwp-content%2Fuploads%2F2018%2F01%2Fdefault-avatar-2.jpg&f=1&nofb=1"
            roundedCircle
            style={{ maxHeight: "100%" }}
          />
          <br />
        </div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First Name" required />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last Name" required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="Username" required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridAboutMe">
              <Form.Label>About Me</Form.Label>
              <Form.Control as="textarea" placeholder="About Me" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridInstaId">
              <Form.Label>Insta Id</Form.Label>
              <Form.Control placeholder="Insta Id" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Form.File
                size="lg"
                id="exampleFormControlFile1"
                label="Upload Image"
                style={{ color: "white" }}
              />
            </Form.Group>
          </Form.Row>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary" type="submit" size='lg'>
              Sign Up
            </Button>
          </div>
        </Form>
        <br />
        <br />
        <br />
      </Container>
    </div>
  );
};
