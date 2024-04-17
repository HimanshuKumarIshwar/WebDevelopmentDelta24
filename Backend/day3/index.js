const express = require("express");
const path = require("path");

const app = express();

// app.use(express.static("public"));
 app.use(express.static(path.join(__dirname, "public/css")))
 app.use(express.static(path.join(__dirname, "public/js")))


const PORT = 4004;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rollDice.ejs", { num: diceVal });
});

app.get("/name", (req, res) => {
  res.send("Himanshu");
});

app.get("/ig/:username", (req, res) => {
  //const follower = ["adam", "stiv", "abc"];
// let { username } = req.params;
//  res.render("instagram.ejs", { username, follower });



const instaData = require("./data.json")
 const {username} = req.params;
 const data = instaData[username];
 if(data){
  res.render("instagram.ejs", {data})
 }else {
    res.render("error.ejs")
 }



});

app.listen(PORT, () => {
  console.log(`APP is listening on port ${PORT}`);
});
