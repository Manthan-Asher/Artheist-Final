import React from "react";

import { Container } from "semantic-ui-react";

import { UserDetails } from "./UserDetails";
import { PersonalDetails } from "./PersonalDetails";
import { About } from "./About";
import { Success } from "./Success";

import { Form } from "semantic-ui-react";
import { connect } from "react-redux";

class MainFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      age: "",
      username: "",
      interests: "",
      about: "",
      dob: "",
      phoneNumber: "",
      skills: "",
    };

    // The above thing needs to be corrected
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //just show the success page (step 4 )
    this.setState((prevState) => {
      return {
        ...prevState,
        step: 3,
      };
    });
  };
  handleChange = (event, { name, value, checked, type }) => {
    if (type === "checkbox") {
      //TODO generic solution for these checkboxes!!
      let { interests } = this.state;
      if (checked) {
        interests = [...interests, value];
      } else {
        interests = interests.filter((item) => item !== value);
      }
      this.setState((prevState) => {
        return {
          ...prevState,
          interests: interests,
        };
      });
    } else {
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    }
  };

  next = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        step: prevState.step + 1,
      };
    });
  };

  prev = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        step: prevState.step - 1,
      };
    });
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      gender,
      age,
      username,
      interests,
      about,
      dob,
      skills,
      phoneNumber,
    } = this.state;

    const values = {
      firstName,
      lastName,
      email,
      gender,
      age,
      interests,
      about,
      username,
      dob,
      skills,
      phoneNumber,
    };

    if (!this.props.userData) {
      return <div>Loading...</div>;
    }

    return (
      <Container textAlign="left">
        <Form onSubmit={this.handleSubmit}>
          <Step
            step={step}
            values={values}
            handleChange={this.handleChange}
            next={this.next}
            prev={this.prev}
          />
        </Form>
      </Container>
    );
  }
}

const Step = ({ step, values, handleChange, next, prev }) => {
  switch (step) {
    case 1:
      return (
        <UserDetails values={values} handleChange={handleChange} next={next} />
      );
    case 2:
      return (
        <About
          values={values}
          handleChange={handleChange}
          next={next}
          prev={prev}
        />
      );
    case 3:
      return <Success values={values} />;
    default:
      return null;
  }
};

const mapStateToProps = (state) => ({
  userData: state.auth.user,
});

export default connect(mapStateToProps)(MainFormContainer);
