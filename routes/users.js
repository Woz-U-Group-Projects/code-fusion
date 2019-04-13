var express = require("express");
var router = express.Router();
var UserModel = require("../models/user");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authService = require("../services/auth");

// create new user if one doesn't exist
router.post("/signup", function(req, res, next) {
  console.log(req.body);
  UserModel.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    },
    function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json("User successfully created");
      }
    }
  );
});

// login user and return JWT as cookie
// attempt to find the user by their username, if not found then respond 401 unauthorized
router.post("/login", function(req, res, next) {
  console.log(req.body);
  UserModel.findOne({ username: req.body.username }, function(err, userInfo) {
    if (err) {
      console.log("ERROR");
      console.log(err);
    } else {
      console.log(userInfo);
      // make sure we found a user, then compare the passwords
      if (
        userInfo &&
        bcrypt.compareSync(req.body.password, userInfo.password)
      ) {
        let token = jwt.sign(
          { id: userInfo._id, userName: userInfo.username },
          "secretkey",
          { expiresIn: "1h" }
        );
        res.cookie("jwt", token);
        res.json("Login successful");
      } else {
        // didn't find the user, or credentials are invalid
        res.status(401);
        console.log("invalid credentials");
        res.json("invalid credentials");
      }
    }
  });
});

// find a profile from a user (their user object) based on the received jtw cookie
router.get("/profile", authService.verifyUser, function(req, res, next) {
  // authService.verifyUser attaches req.body.userId from the jtw cookie if it's valid
  // find the user by their id
  UserModel.findById(req.body.userId, function(err, userInfo) {
    if (err) {
      console.log(err);
      res.json("invalid credentials");
    } else {
      res.send(userInfo);
    }
  });
});

// logout
router.get("/logout", function(req, res, next) {
  // set a new jwt cookie that will immediately expire
  res.cookie("jwt", "", { expires: new Date(0) });
  res.json("Logged out");
});

// validate a token
router.get("/validateToken", authService.verifyUser, function(req, res, next) {
  // if there is a token we return true
  // this only happens if verifyUser is passed successfully (validates token)
  res.json(true);
});

module.exports = router;
