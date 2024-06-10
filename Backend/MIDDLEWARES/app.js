const express = require("express");
const ExpressError = require("./ExpressError.js");
const app = express();

// app.use((req, res, next) => {
//   console.log("Hi i am middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Hi i am 2nd middleware");
//   next();
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "EXCESS DENIED!");
};
app.get("/api", checkToken, (req, res) => {
  res.send("data");
});
app.use("/random", (req, res, next) => {
  console.log("Only call for random ");
  next();
});

app.get("/err", (req, res) => {
  abcd = abdc;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(401, "Access  to admin forbidden");
});
app.use((err, req, res, next) => {
  let { status = 500, message = "Some error" } = err;
  res.status(status).send(message);
});

// app.use((err, req, res, next) => {
//   console.log("---------Error2----------");
//   next(err);
// });

app.get("/", (req, res) => {
  res.send("From server");
});

app.get("/random", (req, res) => {
  res.send("Hi  this is random Page");
});
// Logger Morgan
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toLocaleString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });
//404
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(8080, () => {
  console.log(`app is listing on Port 8080`);
});
