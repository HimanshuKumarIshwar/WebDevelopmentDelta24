const express = require("express");

const app = express();

const Port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world i am in root");
});

app.get("/login", (req, res) => {
  res.send("LOgin Page");
});

app.get("/signUp", (req, res) => {
  res.send("Sign UP Page");
});

app.get("/help", (req, res) => {
  res.send(`<h1>Help Section </h1>`);
});

app.get("/fruits", (req, res) => {
  res.send(`<ul>
    <li>Apple</li> <li>Banana</li> <li>Mango</li></ul>`);
});
app.get("/id/:username", (req, res) => {
  let { username } = req.params;
  let htmlstr = `<h1> Welcome to the page of @${username}</h1>`;
  res.send(htmlstr);
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
    res.send(`<h1> Nothing search </h1>`);
  }
  res.send(`<h1>search results for query: ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send("404 Page  Not found");
});

// app.use()

app.listen(Port, () => {
  console.log("app listening on port", Port);
});
