import React, {useState} from "react";
import {connect} from "react-redux";
import {register} from "../../actions/auth";
import {withRouter} from "react-router-dom";
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

const Signup = ({openButton, handleClose, register, history}) => {
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
      firstName: name.split(" ")[0],
      lastName: name.split(" ")[1],
      username: email,
      password,
    };

    await register(user, history);
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={openButton}
        onClose={openButton}
        aria-labelledby="form-dialog-title"
        className="signUpDialog"
      >
        {/* <DialogTitle id="form-dialog-title">Signup Now</DialogTitle> */}
        <DialogActions className="icon-button">
          <div className="google-btn-container">
            <a
              href="/auth/google"
              style={{textDecoration: "none", color: "inherit"}}
            >
              <div class="google-btn">
                <div class="google-icon-wrapper">
                  <img
                    class="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  />
                </div>
                <p class="btn-text" style={{textAlign: "center"}}>
                  <b>Sign Up with Google</b>
                </p>
              </div>
            </a>
          </div>
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
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Full Name"
              onFocus={handleFocus}
              autoComplete="off"
              value={input.name}
              onChange={handleChange}
              required
            />
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Address"
              onFocus={handleFocus2}
              autoComplete="off"
              value={input.email}
              onChange={handleChange}
              required
            />

            <label for="password">Password</label>
            <input
              className="password-input"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              onFocus={handleFocus3}
              name="password"
              value={input.password}
              onChange={handleChange}
              required
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

export default connect(null, {register})(withRouter(Signup));
