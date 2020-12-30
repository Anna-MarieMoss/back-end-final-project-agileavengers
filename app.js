var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
<<<<<<< HEAD
var postsRouter = require("./routes/posts");
var usersRouter = require("./routes/users/users");
var moodsRouter = require("./routes/moods");
=======
var postsRouter = require("./routes/posts/posts");
var usersRouter = require("./routes/users/users");
var moodsRouter = require("./routes/moods/moods");
>>>>>>> bce05f6d14a137f625f89de2fe8bb6b58592567a
var moodsAndPostsRouter = require("./routes/moodsAndPosts");

var app = express();

<<<<<<< HEAD
=======
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

>>>>>>> bce05f6d14a137f625f89de2fe8bb6b58592567a
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/posts", postsRouter);
app.use("/users", usersRouter);
app.use("/moods", moodsRouter);
app.use("/moodsandposts", moodsAndPostsRouter);

module.exports = app;
