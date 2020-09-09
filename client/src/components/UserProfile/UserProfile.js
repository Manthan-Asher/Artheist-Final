import React from "react";
import "./UserProfile.css";
//import { Link } from "react-router-dom";
import {Paper, Tab, Tabs} from "@material-ui/core";
import {Container} from "semantic-ui-react";
import {makeStyles} from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const UserFeed = () => {
  return (
    <div className="user-feed">
      <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/post1.jpg" alt="" className="post" />
      <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/post2.jpg" alt="" className="post" />
      <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/post3.jpg" alt="" className="post" />
      <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/post3.jpg" alt="" className="post" />
    </div>
  );
};

const AboutUs = () => {
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
        <p>First Name : Chahat</p>
        <p>Last Name :  Bhatia</p>
        <p>Username : username</p>
        <p>Email : chahatbhatia@gmail.com</p>
        <p>Phone Number : 9929638046</p>
        <p>Date of Birth : 12/12/2000</p>
        <p>Gender : Male</p>        
        <p>Age : 20</p>        
      </div>
    </Container>
  );
};

const ContestsParticipated = () => {
  return (
    <div className="contestsParticipated">
      <h3>You Haven't Participated in any contests yet !!</h3>
      <a href="/contest">Participate Now</a>
    </div>
  );
};




const UserProfile = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <div className="user-profile">
      <div className="user-profile-container">
        <div className="user-cover-photo">
          {/* <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/cover.jpg" alt="" className="cover-photo" /> */}

          <div className="user-avatar">
            <img src="https://node-sdk-sample-a4f56167-eded-4451-b5e3-2c4a36341013.s3.amazonaws.com/assets/default-avatar.jpg" alt="" className="user-avatar-photo" />
          </div>
        </div>
        
        <div className="user-insights">
          <ul className="user-activity">
              <li className="info followers">Followers : 0</li>
              <li className="info contests">Contests : 0</li>
              {/* <li className="info insights">Insights</li> */}
          </ul>
          {/* <Button variant="primary" className="invite-button" size="lg">
            Invite
          </Button> */}
        </div>
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
                return <UserFeed />;
              case 1:
                return <AboutUs />;
              case 2:
                return <ContestsParticipated />;
              default:
                return "#FFFFFF";
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
