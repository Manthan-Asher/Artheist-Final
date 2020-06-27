const express = require("express");
const passport = require("passport");
const session = require("express-session");
const connectDB = require("./config/db");
const config = require("config");
const Secret = config.get("sessionSecret");

const app = express();

// Init middleware
app.use(express.json({extended: false}));
app.use(
  session({
    secret: Secret,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// connect Database
connectDB();

app.get("/", (req, res) => {
  res.send("API running ....Login Now");
});

// Define Routes
app.use("/user", require("./routes/api/user"));
app.use("/auth", require("./routes/api/auth"));
app.use("/contests", require("./routes/api/contests"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
