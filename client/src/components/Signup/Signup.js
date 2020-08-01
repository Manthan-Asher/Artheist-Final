import React, {useState} from "react";
import {connect} from "react-redux";
import {register} from "../../actions/auth";
import {Redirect} from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import anime from "animejs/lib/anime.es.js";
import "./Signup.scss";

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
      value: "256 1386",
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
      value: -342,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "248 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
};
const handleFocus3 = (e) => {
  if (current) current.pause();
  current = anime({
    targets: "path",
    strokeDashoffset: {
      value: -682,
      duration: 700,
      easing: "easeOutQuart",
    },
    strokeDasharray: {
      value: "225 1386",
      duration: 700,
      easing: "easeOutQuart",
    },
  });
};

const Signup = ({openButton, handleClose, register}) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {name, email, password} = input;

  const [showPassword, togglePassword] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInput((prevValue) => {
      return {...prevValue, [name]: value};
    });
  };

  const Submit = async () => {
    const user = {
      name,
      username: email,
      password,
    };

    await register(user);
  };

  return (
    <div>
      <Dialog
        open={openButton}
        onClose={openButton}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Signup Now</DialogTitle>
        <DialogActions className="icon-button">
          <a
            href="/auth/google"
            size="large"
            variant="contained"
            style={{backgroundColor: "red", fontWeight: "bold"}}
          >
            <i className="fab fa-google" />
            Signup with Google
          </a>
          <a
            href="/auth/facebook"
            size="large"
            color="primary"
            variant="contained"
          >
            <i className="fab fa-facebook" />
            Signup with Facebook
          </a>
        </DialogActions>
        <DialogContent>
          <hr />
          <DialogContentText>OR</DialogContentText>
          <p style={{marginBottom: "-6vh"}}>Signup manually</p>
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
            <path d="m 40,120.00016 250.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
          </svg>
          <div className="form">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onFocus={handleFocus}
              autoComplete="off"
              value={input.name}
              onChange={handleChange}
            />
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onFocus={handleFocus2}
              autoComplete="off"
              value={input.email}
              onChange={handleChange}
            />

            <label for="password">Password</label>
            <input
              className="password-input"
              type={showPassword ? "text" : "password"}
              id="password"
              onFocus={handleFocus3}
              name="password"
              value={input.password}
              onChange={handleChange}
            />
            <span>
              <i
                onClick={() => togglePassword(!showPassword)}
                className={`password-icon fas fa-${
                  showPassword ? "eye-slash" : "eye"
                }`}
              ></i>
            </span>
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
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect(null, {register})(Signup);
