import React from "react";
import {Image} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {addAvatar} from "../../actions/profile";

const ImageGetter = ({userData, addAvatar}) => {
  if (!userData) {
    return <div>Loading...</div>;
  }

  const source = userData.avatar
    ? `/profile/${userData._id}/avatar`
    : userData.profile_pic;

  function handleSubmit(e) {
    var imageFile = document.querySelector("#profile-image");
    var formData = new FormData();
    formData.append("avatar", imageFile.files[0]);
    addAvatar(formData);
  }

  return (
    <div
      className="ui container"
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="image"
        style={{display: "flex", justifyContent: "center"}}
      >
        {/* <image
          className="ui image rounded"
          src={require("../../assets/default-avatar.jpg")}
          height="200px"
          width="100px"
        /> */}
        <Image src={source} circular height="300px" width="300px" bordered />
      </div>
      <form
        className="ui big form"
        encType="mutipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label>Profile Image</label>
          <input type="file" id="profile-image" name="avatar" />
        </div>
        <div style={{display: "flex", alignItems: "space-around"}}>
          <button type="submit" className="ui big blue button">
            Change
          </button>
        </div>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <Link to="/additionalDetailsProfile" className="ui big blue button">
            Next
          </Link>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.auth.user,
});

export default connect(mapStateToProps, {addAvatar})(ImageGetter);
