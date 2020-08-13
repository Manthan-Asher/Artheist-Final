import React from "react";
import { Form, Button, Input, Select, Radio } from "semantic-ui-react";

const genderOptions = [
  { key: "m", label: "Male", value: "male" },
  { key: "f", label: "Female", value: "female" },
];

const PersonalDetails = (props) => {
  const { email, phoneNumber, gender, age, dob } = props.values;

  let ageOptions = [];
  for (var i = 18; i < 30; i++) {
    ageOptions.push({ text: i, value: i });
  }

  return (
    <React.Fragment>
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1 className="ui centered">Personal Details</h1>

          <Form.Field
            control={Input}
            label="Email"
            value={email}
            name="email"
            onChange={props.handleChange}
          />
          <Form.Field
            control={Input}
            label="Phone Number"
            value={phoneNumber}
            name="phoneNumber"
            onChange={props.handleChange}
          />
          <Form.Field
            control={Input}
            label="Date of Birth"
            value={dob}
            name="dob"
            onChange={props.handleChange}
          />

          <Form.Group inline>
            <label>Gender</label>
            {genderOptions.map((opt) => (
              <Form.Field
                control={Radio}
                name="gender"
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

          <Button onClick={props.prev}>Back</Button>
          <Button onClick={props.next}>Next</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export { PersonalDetails };
