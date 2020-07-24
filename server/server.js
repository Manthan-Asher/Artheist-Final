const express = require("express");
// const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const keys = require("./config/keys");

require("./models/User");
require("./models/Post");
require("./models/Contest");
require("./services/passport");

// var corsOptions = {
//   credentials: true,
//   origin: "http://localhost:3000",
//   methods: "GET,POST,PATCH,PUT,DELETE",
// };

const app = express();

// Init middleware
app.use(express.json());
app.use(
  session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 30 * 24 * 60 * 60 * 1000},
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// app.use(cors(corsOptions));

// connect Database
try {
  mongoose.connect(keys.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("MongoDB connected...");
} catch (error) {
  console.log(error.message);
  // Exit process with failure
  process.exit(1);
}

// Define Routes
app.use("/user", require("./routes/api/user"));
app.use("/auth", require("./routes/api/auth"));
app.use("/contests", require("./routes/api/contests"));
app.use("/profile", require("./routes/api/profile"));

if (process.env.NODE_ENV === "production") {
  // express will serve up production assets
  // like our main.js file or main.css file
  app.use(express.static("client/build"));

  // express will serve the index.html file
  // if it doesnt recognize the route

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
