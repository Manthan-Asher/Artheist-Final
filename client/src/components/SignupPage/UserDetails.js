import React from "react";
import { Form, Button, Input, Image } from "semantic-ui-react";

const UserDetails = (props) => {
  const { firstName, lastName, username } = props.values;
  return (
    <React.Fragment>
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div>
          <h1 className="ui centered">User Details</h1>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="First Name"
              value={firstName}
              name="firstName"
              onChange={props.handleChange}
            />

            <Form.Field
              control={Input}
              label="Last Name"
              value={lastName}
              name="lastName"
              onChange={props.handleChange}
            />
          </Form.Group>

          <Form.Field
            control={Input}
            label="Username"
            value={username}
            name="username"
            onChange={props.handleChange}
          />

          <Button onClick={props.next}>Next</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export { UserDetails };
