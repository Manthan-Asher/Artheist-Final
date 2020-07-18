import React from "react";
import "./UserProfile.css";
import {Button} from "react-bootstrap";
import {Paper, Tab, Tabs} from "@material-ui/core";

import cover from "../../assets/cover.jpg";
import post1 from "../../assets/post1.jpg";
import post2 from "../../assets/post2.jpg";
import post3 from "../../assets/post3.jpg";
import avatar from "../../assets/default-avatar.jpg";
import {makeStyles} from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const UserProfile = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="user-profile">
      <div className="user-profile-container">
        <div className="user-cover-photo">
          <img src={cover} alt="" className="cover-photo" />
        </div>
        <div className="user-avatar">
          <img src={avatar} alt="" className="user-avatar-photo" />
          <ul className="user-activity">
            <li className="info followers">Followers : 0</li>
            <li className="info contests">Contests : 0</li>
            <li className="info insights">Insights</li>
          </ul>
          <Button variant="primary" className="invite-button" size="lg">
            Invite
          </Button>
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
              <Tab label="ENTRIES" />
            </Tabs>
          </Paper>

          <div className="user-feed">
            <img src={post1} alt="" className="post" />
            <img src={post2} alt="" className="post" />
            <img src={post3} alt="" className="post" />
            <img src={post1} alt="" className="post" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
