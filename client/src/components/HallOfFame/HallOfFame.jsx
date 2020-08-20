import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./HallOfFame.css";
import Video from "../Video/Video";

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box div={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    height: 500,
  },
  tab: {
    color: theme.palette.primary.contrastText,
  },
}));

const HallOfFame = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="HallOfFameContainer">
      <h1>Hall Of Fame</h1>
      <div className={classes.tab}>
        <AppBar position="static" className="appBar">
          <Tabs
            variant="fullWidth"
            className="tabs"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Dancing" href="/dance" {...a11yProps(0)} />
            <LinkTab label="Singing" href="/singing" {...a11yProps(1)} />
            <LinkTab label="Music" href="/music" {...a11yProps(2)} />
            <LinkTab label="Drama/Acting" href="/drama" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel className="tabPanel" value={value} index={0}>
          <Video className="video" />
          <Video className="video" />
          <Video className="video" />
        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={1}>
          <p>There are no videos for now come back soon......</p>
        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={2}>
          <p>There are no videos for now come back soon......</p>
        </TabPanel>
        <TabPanel className="tabPanel" value={value} index={3}>
          <p>There are no videos for now come back soon......</p>
        </TabPanel>
        <div className="fameBtnContainer">
          <button className="hallOfFameBtn">View More</button>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
