const express = require("express");
const app = express();
const users = require("./user");
const posts = require("./post");
const cookieParser = require("cookie-parser");
app.use(cookieParser("secretcode"));
app.use("/user", users);
app.use("/post", posts);
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const sessionOptin = {
  secret: "MySuperSecretString",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptin));
app.use(flash());
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/register", (req, res) => {
  let { name = "anonomus" } = req.query;
  req.session.name = name;
  if (name === "anonomus") {
    req.flash("error", "User is not registerd");
  } else {
    req.flash("success", "New user Registerd");
  }

  //   res.send(`you register ${name}`);
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.render("flash.ejs", { name: req.session.name });
});

app.get("/test", (req, res) => {
  res.send("test successfull");
});

app.get("/reqcount", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }

  res.send(`we requested ${req.session.count} times`);
});

// app.get("/getcookies", (req, res) => {
//   res.cookie("Greeting", "Namsaste");
//   res.cookie("MadeIn", "India");
//   res.send("from cookies");
// });

// app.get("/getsignedcookie", (req, res) => {
//   res.cookie("madeIn", "India", { signed: true });
//   res.send("signed Cookie");
// });

// app.get("/verify", (req, res) => {
//   console.log(req.signedCookies);
//   res.send("verify");
// });

// app.get("/greeting", (req, res) => {
//   let { name = "Anaoums" } = req.cookies;
//   res.send(`Hi i'm ${name}`);
// });
app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("Ok from server");
});

app.listen(3030, () => {
  console.log(`App is listeining on port 3030`);
});
