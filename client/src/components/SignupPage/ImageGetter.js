import React, {useEffect} from "react";
import {Image} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import "./SignUpPage.scss";

import {addAvatar, getProfile} from "../../actions/profile";
import ArtheistLoader from "../ArtheistLoader/ArtheistLoader";

const ImageGetter = ({userData, addAvatar, getProfile}) => {
  useEffect(() => {
    getProfile();
  }, [addAvatar]);

  if (!userData) {
    return <ArtheistLoader />;
  }

  console.log(userData);
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
    <div className="editImgContainerBg">
      <div
        className=" editImgContainer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <h2>Edit Profile Photo</h2>
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
          <Image src={source} circular height="200px" width="200px" bordered />
        </div>
        <form
          className="ui big form"
          encType="mutipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="field">
            <label>Browse Image</label>
            <br />
            <input type="file" id="profile-image" name="avatar" />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "space-between",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <button type="submit" className="ui big blue button">
                Change
              </button>
            </div>
            <div>
              <Link to="/additionalDetails" className="ui big blue button">
                Next
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.profile.response,
});

export default connect(mapStateToProps, {addAvatar, getProfile})(ImageGetter);
