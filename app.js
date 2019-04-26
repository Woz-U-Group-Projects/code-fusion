var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");

var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");
var inventoryRouter = require('./routes/inventory');

var app = express();

// serve the react application
//app.use(express.static(path.join(__dirname, "client/build")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// important option to allow credentials
app.use(cors({ origin: "http://localhost:4200", credentials: true }));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use('/inventory', inventoryRouter);

// connect to a local mongodb, chave to URL if hosted database
var mongoDB = "mongodb://dbuser:password1@ds137596.mlab.com:37596/codefusion";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

module.exports = app;
