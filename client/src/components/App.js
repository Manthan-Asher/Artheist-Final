import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import CreateContestPage from "./CreateContestPage/CreateContestPage";
import MobileSignUpPage from "./MobileSignUpPage/MobileSignUpPage";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";
import Contest from "./ContestPage/Contest";
import SignUpPage from "./SignupPage";
import ImageGetter from "./SignupPage/ImageGetter";
import ContestDesc from "./ContestDescription/ContestDesc";
import UserProfile from "./UserProfile/UserProfile";
import PostHighlight from "./PostHighlight/PostHighlight";
import {authLogin} from "../actions/auth";
import {connect} from "react-redux";
import Alert from "./Alert/Alert";

import ArtheistLoader from "./ArtheistLoader/ArtheistLoader";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faFilter, faFile, faSearch} from "@fortawesome/free-solid-svg-icons";

library.add(faFilter, faFile, faSearch);

class App extends React.Component {
  componentDidMount() {
    this.props.authLogin(window.location.hash);
  }
  render() {
    return (
      <Router>
        <Navbar />
        <Alert />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/aboutUs" exact component={AboutUs}></Route>
          <Route path="/contest" exact component={Contest}></Route>
          <Route path="/additionalDetails" exact component={SignUpPage}></Route>
          <Route path="/contests/:id" exact component={ContestDesc}></Route>
          <Route path="/profileChange" exact component={ImageGetter}></Route>
          <Route path="/userProfile" exact component={UserProfile}></Route>
          <Route path="/contactUs" exact component={ContactUs}></Route>
          <Route path="/posts/:id" exact component={PostHighlight}></Route>
          <Route
            path="/createContest"
            exact
            component={CreateContestPage}
          ></Route>
          <Route
            path="/artheistLoader"
            exact
            component={ArtheistLoader}
          ></Route>
          <Route
            path="/mobileSignUpPage"
            exact
            component={MobileSignUpPage}
          ></Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default connect(null, {authLogin})(App);
