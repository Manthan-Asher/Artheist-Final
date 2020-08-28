import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {getContests} from "../../actions/contests";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./ContestCards.css";

import ImgMediaCard from "./ContestCard/ContestCard";
import Pagination from "../Pagination/Pagination";

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
        <Box p={3}>
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
    backgroundColor: theme.palette.background.paper,
  },
}));

function NavTabs({getContests, contests: {contests}}) {
  useEffect(() => {
    getContests();
  }, [getContests]);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    contests && (
      <div className="ContestContainer">
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              variant="fullWidth"
              value={value}
              className="tabs2"
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab
                label="Active Contests"
                href="/drafts"
                {...a11yProps(0)}
              />
              <LinkTab
                label="Upcoming Contests"
                href="/trash"
                {...a11yProps(1)}
              />
              <LinkTab
                label="Previous Contests"
                href="/spam"
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            {contests.length > 0 &&
              contests.map((contest) => (
                <ImgMediaCard key={contest._id} contest={contest} />
              ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {contests.length > 0 ? (
              contests.map((contest) => (
                <ImgMediaCard key={contest._id} contest={contest} />
              ))
            ) : (
              <h1>Loading..</h1>
            )}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {contests.length > 0 ? (
              contests.map((contest) => (
                <ImgMediaCard key={contest._id} contest={contest} />
              ))
            ) : (
              <h1>Loading..</h1>
            )}
          </TabPanel>
          <div>
            <Pagination />
          </div>
        </div>
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  contests: state.contests,
});

export default connect(mapStateToProps, {getContests})(NavTabs);
