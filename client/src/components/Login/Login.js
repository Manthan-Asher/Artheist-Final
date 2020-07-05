import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {login} from "../../actions/auth";
import {Redirect, Link} from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import anime from "animejs/lib/anime.es.js";
import "./Login.css";

var current = null;
const handleFocus = (e) => {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
};
const handleFocus2 = (e) => {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "240 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
};

const Login = ({openButton, handleClose, login, isAuthenticated}) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const {email, password} = input;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInput((prevValue) => {
      return {...prevValue, [name]: value};
    });
  };

  const Submit = async () => {
    const user = {
      username: email,
      password,
    };
    await login(user);
  };

  if (isAuthenticated) {
    return <Redirect to="/signup" />;
  }

  const loginWithFacebook = () => {
    // window.location.href = "http://localhost:5000/auth/facebook/contests";
    window.open("http://localhost:5000/auth/facebook", "_self");
  };

  function loginWithGoogle() {
    // window.location.href = "http://localhost:5000/auth/google/contests";
    window.open("http://localhost:5000/auth/google", "_self");
  }

  return (
    <div>
      <Dialog
        open={openButton}
        onClose={openButton}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" style={{fontWeight: "bold"}}>
          Login Now
        </DialogTitle>
        <DialogActions className="icon-button">
          <Button
            size="large"
            variant="contained"
            style={{backgroundColor: "red"}}
            onClick={loginWithGoogle}
          >
            <i className="fab fa-google" />
            Login with Google
          </Button>
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={loginWithFacebook}
          >
            <i className="fab fa-facebook" />
            Login with Facebook
          </Button>
        </DialogActions>
        <DialogContent>
          <hr />
          <DialogContentText>OR</DialogContentText>
          <p style={{marginBottom: "-6vh"}}>Login manually</p>
          <svg viewBox="0 0 320 300">
            <defs>
              <linearGradient
                id="linearGradient"
                x1="13"
                y1="193.49992"
                x2="307"
                y2="193.49992"
                gradientUnits="userSpaceOnUse"
              >
                <stop style={{stopColor: "#ff00ff"}} offset="0" id="stop876" />
                <stop style={{stopColor: "#ff0000"}} offset="1" id="stop878" />
              </linearGradient>
            </defs>
            <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
          </svg>
          <div className="form">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onFocus={handleFocus}
              autoComplete="off"
              value={input.email}
              onChange={handleChange}
            />
            <label for="Password">Password</label>
            <input
              type="password"
              id="password"
              onFocus={handleFocus2}
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="contained"
            style={{backgroundColor: "red", fontWeight: "bold"}}
            className="buttons"
          >
            Cancel
          </Button>
          <Button
            onClick={Submit}
            color="primary"
            variant="contained"
            className="buttons"
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, {login})(Login);
