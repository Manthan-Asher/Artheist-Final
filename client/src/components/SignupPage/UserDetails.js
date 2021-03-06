import React from "react";
import {Form, Button, Input, Select, Radio, TextArea} from "semantic-ui-react";
import {connect} from "react-redux";
import {updateProfile} from "../../actions/profile";
import {withRouter} from "react-router-dom";
// import Moment from "react-moment";
import "./SignUpPage.scss";

const genderOptions = [
  {key: "m", label: "Male", value: "Male"},
  {key: "f", label: "Female", value: "Female"},
];

const About = (props) => {
  console.log(props);
  const {username, phoneNumber, gender, age, dob, about} = props.values;

  let ageOptions = [];
  for (var i = 18; i < 30; i++) {
    ageOptions.push({text: i, value: i});
  }
  return (
    <React.Fragment>
      <div
        style={{
          marginTop: "108px",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div style={{width: "50vw"}} className="editFormContainer">
          <h1 className="ui centered">User Details</h1>
          <br />
          <Form.Field
            control={Input}
            label="Username"
            value={username}
            name="username"
            onChange={props.handleChange}
          />
          <Form.Field
            control={Input}
            label="Phone Number"
            value={phoneNumber}
            name="phoneNumber"
            type="tel"
            onChange={props.handleChange}
          />
          <Form.Field
            control={Input}
            label="Date of Birth"
            value={dob}
            name="dob"
            type="date"
            onChange={props.handleChange}
          />

          <Form.Group inline>
            <label>Gender</label>
            {genderOptions.map((opt) => (
              <Form.Field
                control={Radio}
                name="gender"
                className="gender"
                label={opt.label}
                value={opt.value}
                key={opt.key}
                checked={gender === opt.value}
                onChange={props.handleChange}
              />
            ))}
          </Form.Group>

          <Form.Field
            control={Select}
            label="Age"
            name="age"
            value={age}
            options={ageOptions}
            placeholder="Select your age"
            onChange={props.handleChange}
          />

          <Form.Field
            control={TextArea}
            name="about"
            value={about}
            label="About"
            placeholder="Tell us more about you..."
            onChange={props.handleChange}
          />

          <Button
            color="blue"
            type="submit"
            onClick={() => {
              props.updateProfile(props.values, props.history);
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export const UserDetails = connect(null, {updateProfile})(withRouter(About));
