import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Contest from "./ContestPage/Contest";
import SignUpPage from "./SignupPage/SignUpPage";
import ContestDesc from "./ContestDescription/ContestDesc";
import UserProfile from "./UserProfile/UserProfile";

export default () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/home" exact component={HomePage}></Route>
        <Route path="/contest" exact component={Contest}></Route>
        <Route path="/signup" exact component={SignUpPage}></Route>
        <Route path="/contestDesc/:id" exact component={ContestDesc}></Route>
        <Route path="/userProfile" exact component={UserProfile}></Route>
        {/* <Redirect to="/home" /> */}
      </Switch>
      <Footer />
    </Router>
  );
};
