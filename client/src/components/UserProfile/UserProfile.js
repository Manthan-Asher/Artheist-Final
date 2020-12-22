import React from "react";
import "./UserProfile.css";
//import { Link } from "react-router-dom";
import {Paper, Tab, Tabs} from "@material-ui/core";
import {Container} from "semantic-ui-react";
import {makeStyles} from "@material-ui/core";
import {useState, useEffect} from "react";
import {connect} from "react-redux";
import ArtheistLoader from "../ArtheistLoader/ArtheistLoader";
import ProfileContest from "./ProfileContests/ProfileContests";
import {getContestsByUser} from "../../actions/contests";
import {getPostsByUser} from "../../actions/posts";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const UserFeed = ({posts}) => {
  return posts.length > 0 ? (
    <div className="user-feed">
      {posts.map((post) => {
        return (
          <a href={`/#/posts/${post._id}`} className="post">
            <img key={post._id} src={post.URL} alt="" className="postMedia" />
          </a>
        );
      })}
    </div>
  ) : (
    <div className="contestsParticipated">
      <h3>You Haven't Uploaded any Posts yet !!</h3>
      <a href="/#/contest">Participate Now</a>
    </div>
  );
};

const AboutUs = ({
  info: {
    firstName,
    lastName,
    username,
    site_name,
    mobile_number,
    dob,
    gender,
    age,
  },
}) => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "grid",
          maxWidth: "100%",
          gridTemplateColumns: "auto auto",
          gridColumnGap: "20vw",
        }}
        className="info-container"
      >
        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Username : {site_name}</p>
        <p>Email : {username} </p>
        <p>Phone Number : {mobile_number} </p>
        <p>Date of Birth : {dob} </p>
        <p>Gender : {gender} </p>
        <p>Age : {age}</p>
      </div>

      {/* EDIT PROFILE BUTTON */}
      <button className="editProfileBtn">Edit Profile</button>
    </Container>
  );
};

const ContestsParticipated = ({contests}) => {
  return contests.length > 0 ? (
    <div className="participatedContests">
      {contests.map((contestParticipated) => {
        return (
          <ProfileContest
            key={contestParticipated._id}
            contest={contestParticipated}
          />
        );
      })}
    </div>
  ) : (
    <div className="contestsParticipated">
      <h3>You Haven't Participated in any contests yet !!</h3>
      <a href="/#/contest">Participate Now</a>
    </div>
  );
};

const UserProfile = ({
  user,
  getContestsByUser,
  contestsByUser,
  getPostsByUser,
  postsByUser,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  useEffect(() => {
    getContestsByUser();
    getPostsByUser();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  if (!user || !contestsByUser || !postsByUser) {
    return <ArtheistLoader />;
  }
  return (
    <div className="user-profile">
      <div className="user-profile-container">
        <div className="user-cover-photo">
          {/* <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/cover.jpg" alt="" className="cover-photo" /> */}

          <div className="user-avatar">
            <img
              src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/default-avatar.jpg"
              alt=""
              className="user-avatar-photo"
            />
          </div>
        </div>

        {/* <div className="user-insights">
          <ul className="user-activity">
            <li className="info followers">Followers : 0</li>
            <li className="info contests">Contests : 0</li>
          </ul>
        </div> */}

        <div className="user-posts">
          <Paper
            className={classes.root}
            style={{width: "80%", marginLeft: "10%"}}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="FEED" />
              <Tab label="ABOUT" />
              <Tab label="CONTESTS" />
            </Tabs>
          </Paper>

          {(() => {
            switch (value) {
              case 0:
                return <UserFeed posts={postsByUser} />;
              case 1:
                return <AboutUs info={user} />;
              case 2:
                return <ContestsParticipated contests={contestsByUser} />;
              default:
                return "#FFFFFF";
            }
          })()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  contestsByUser: state.contests.contests,
  postsByUser: state.posts.posts,
});

export default connect(mapStateToProps, {getContestsByUser, getPostsByUser})(
  UserProfile
);
