import React from "react";
import {Container} from "semantic-ui-react";
import {UserDetails} from "./UserDetails";
import {Form} from "semantic-ui-react";
import {connect} from "react-redux";
import {getProfile} from "../../actions/profile";
import ArtheistLoader from "../ArtheistLoader/ArtheistLoader";

class MainFormContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile();
  }

  state = {
    gender: !this.props.profile.gender ? "" : this.props.profile.gender,
    age: !this.props.profile.age ? "" : this.props.profile.age,
    username: !this.props.profile.site_name ? "" : this.props.profile.site_name,
    about: !this.props.profile.about ? "" : this.props.profile.about,
    dob: !this.props.profile.dob ? "" : this.props.profile.dob,
    phoneNumber: !this.props.profile.mobile_number
      ? ""
      : this.props.profile.mobile_number,
  };

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
    if (!this.props.profile) {
      return <ArtheistLoader />;
    }

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

const mapStateToProps = (state) => ({
  profile: state.profile.response,
});

export default connect(mapStateToProps, {getProfile})(MainFormContainer);
