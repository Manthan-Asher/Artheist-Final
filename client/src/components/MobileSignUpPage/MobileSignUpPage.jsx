import React from 'react'
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
//import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./MobileSignUpPage.css";
import Login from "./Login";
import SignUp from "./SignUp";

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
            <div>{children}</div>
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

function MobileSignUpPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.tab}>
            <AppBar position="static" className="mobileSignUpAppBar">
                <Tabs
                    variant="fullWidth"
                    className="tabs"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Sign Up" href="/signUp" {...a11yProps(0)} />
                    <LinkTab label="Login" href="/login" {...a11yProps(1)} />
                </Tabs>
                </AppBar>
            <TabPanel className="tabPanelSignUp" value={value} index={0}>
                <SignUp />
            </TabPanel>
            <TabPanel className="tabPanelSignUp" value={value} index={1}>
                <Login />
            </TabPanel>
        </div>
    )
}

export default MobileSignUpPage
