const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Himanshu#8362",
});

// let q = "INSERT INTO  user (id, username, email, password) VALUES ?";
// let users = [ ["123b", "123_newuserb", "abc@gmail.comb", "abcb"], ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]];

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let data = [];
// for(let i = 1; i <=100; i++){
//  // console.log(getRandomUser());
//  data.push(getRandomUser());
// }

// try {
//   connection.query(q, [data], (err, result)=> {
//     if(err) throw err;
//     console.log(result);
//     });
// } catch (err) {
//   console.log(err);
// }

//  connection.end();

//  let getRandomUser  =   () => {
//     return {
//       userId: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//      password: faker.internet.password(),

//     };
//   }

// console.log(getRandomUser());

// Routing

app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result[0][`COUNT(*)`]);
      let count = result[0][`COUNT(*)`];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send(`Problem in dataBase`);
  }
});

app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      // console.log(result);
      let users = result;
      res.render("showuser.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send(`Problem in dataBase`);
  }
});

//EDIT ROUTE
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;

  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      res.render("edit.ejs", { user });
    });
  } catch (error) {
    console.log(error);
    res.send("Peoblem in DB");
  }
});

//UPDATE ROUTE
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      console.log(user);
      if (formPass != user.password) {
        res.send("Password is wrong");
      }
      res.send("Updated");
    });
  } catch (error) {
    console.log(error);
    res.send("Peoblem in DB");
  }
});

app.listen(8080, () => {
  console.log(`App is listening on port ${8080}`);
});
