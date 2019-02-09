// const ejs = require("ejs");

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("./config/passport");

const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// Middleware for Nodemailer
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Test route -- delete this later
// app.get("/", (req, res) => {
//     res.render(path.join(__dirname, "./views/pages/main.ejs"));
// });

// Routes
const authRoutes = require("./routes/authRoutes");
app.use(authRoutes);

const dataRoutes = require("./routes/dataRoutes");
app.use(dataRoutes);

const htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}`);
    });
});