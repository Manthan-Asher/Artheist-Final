import React, { Component } from 'react';
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./HowItWorksPage.css";



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
  





const HowItWorksPage = () => {
    
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
     { 
        return ( 
            <div className="howItWorksContainer">
                <section className="howItWorksHeader">
                    <div>
                        <h1>How It Works?</h1>
                        <h2>Artheist is #1 Contest Aggregation Platform</h2>
                    </div>
                </section>
                <section className="howItWorksPoster"></section>
                <section className="offersSection">
                    <div className="offerHeader">
                        <h2>What does artHeist Offers?</h2>
                    </div>
                    <div className="offerTabs">
                        <div className={classes.tab}>
                            <AppBar position="static" className="appBar">
                                <Tabs
                                    variant="fullWidth"
                                    className="tabs"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="nav tabs example"
                                >
                                    <LinkTab label="For Artists" href="/artists" {...a11yProps(0)} />
                                    <LinkTab label="For Creators" href="/creators" {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>
                            <TabPanel className="tabPanel" value={value} index={0}>
                                <p>List of Benefits</p>
                                <ul>
                                    <li>some benefits will come here....</li>
                                    <li>some benefits will come here....</li>
                                    <li>some benefits will come here....</li>
                                    <li>some benefits will come here....</li>
                                </ul>
                            </TabPanel>
                            <TabPanel className="tabPanel" value={value} index={1}>
                                <p>There are no videos for now come back soon......</p>
                                <ul>
                                    <li>some benefits will come here....</li>
                                    <li>some benefits will come here....</li>
                                    <li>some benefits will come here....</li>
                                    <li>some benefits will come here....</li>
                                </ul>
                            </TabPanel>
                            <div className="howItWorksBtnContainer">
                                <button className="howItWorksBtn">Register Now</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default HowItWorksPage;