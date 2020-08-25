import React from "react";
import {Input, Form, Button, Checkbox, TextArea} from "semantic-ui-react";
import {connect} from "react-redux";
import {updateProfile} from "../../actions/profile";

const interestOptions = [
  {key: "1", value: "dancing", label: "Dancing"},
  {key: "2", value: "singing", label: "Singing"},
  {key: "3", value: "music", label: "Music"},
  {key: "4", value: "drama", label: "Drama/Theatre"},
  {key: "5", value: "story", label: "Story Telling/Poetry"},
  {key: "6", value: "comedy", label: "Standip Comedy"},
  {key: "7", value: "magic", label: "Magic/Illusion Art"},
  {key: "8", value: "photography", label: "Photography/Video-making"},
  {key: "9", value: "drawing", label: "Drawing"},
  {key: "10", value: "writing", label: "Writing"},
  {key: "11", value: "designing", label: "Designing(Graphics)"},
  {key: "12", value: "sculpture", label: "Sculpture(3D Art)"},
  {key: "13", value: "painting", label: "Painting"},
  {key: "14", value: "fashion", label: "Fashion Design"},
  {key: "15", value: "interior", label: "Interior Design"},
  {key: "16", value: "jewelry", label: "Jewelry Design"},
  {key: "17", value: "tattoo", label: "Tattoo Art"},
  {key: "18", value: "decorative", label: "Decorative Art"},
  {key: "19", value: "woodcrafts", label: "Wood Crafts/Marble Crafts"},
];

const Something = (props) => {
  const {about, interests, skills} = props.values;
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
          <h1 className="ui centered">More About You</h1>
          {/* <h1 className="ui centered">Your Interests</h1> */}
          <Form.Group inline>
            <label>Interests</label>
            <br />
            <div
              style={{display: "grid", gridTemplateColumns: "auto auto auto"}}
            >
              {interestOptions.map((i) => (
                <Form.Field
                  control={Checkbox}
                  name="interests"
                  value={i.value}
                  label={i.label}
                  onChange={props.handleChange}
                  checked={interests.includes(i.value)}
                  key={i.key}
                />
              ))}
            </div>
          </Form.Group>

          {/* <Form.Field
            control={Input}
            label="Interests"
            value={interests}
            name="interests"
            onChange={props.handleChange}
          /> */}
          <Form.Field
            control={Input}
            label="Skills"
            value={skills}
            name="skills"
            placeholder="Please use comma separated values"
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

          <Button onClick={props.prev}>Back</Button>
          <Button
            color="blue"
            type="submit"
            onClick={() => {
              props.updateProfile(props.values);
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export const About = connect(null, {updateProfile})(Something);
