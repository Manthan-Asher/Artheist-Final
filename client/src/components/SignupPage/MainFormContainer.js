import React from "react";

import {Container} from "semantic-ui-react";

import {UserDetails} from "./UserDetails";

import {Form} from "semantic-ui-react";

class MainFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: "",
      age: "",
      username: "",
      about: "",
      dob: "",
      phoneNumber: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //just show the success page (step 4 )
  };
  handleChange = (event, {name, value}) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  render() {
    const {gender, age, username, about, dob, phoneNumber} = this.state;

    const values = {
      gender,
      age,
      about,
      username,
      dob,
      phoneNumber,
    };
    return (
      <Container textAlign="left">
        <Form onSubmit={this.handleSubmit}>
          <UserDetails values={values} handleChange={this.handleChange} />
        </Form>
      </Container>
    );
  }
}

export default MainFormContainer;
