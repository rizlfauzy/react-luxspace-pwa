const express = require("express");
const app = express();
const http = require("http").createServer(app);
const path = require("path");
require("dotenv").config();

const { PORT, HOST_URL } = process.env;

//Require untuk konfigurasi Flash
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

app.use(express.static(path.join(__dirname, "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//konfigurasi flash
app.use(cookieParser("secret"));

//konfigure session
const cookieTime = 1000 * 60 * 15;
app.use(
  session({
    cookie: { maxAge: cookieTime * 4 * 24 },
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

app.use("/", require("./routes/routes"));

http.listen(PORT, () => console.log(`Aplikasi berjalan di ${HOST_URL}`));
