const express  =require("express");

const app = express();

const port = 8080;

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res)=> {
    res.send("Hello world")
})

app.get("/register", (req, res) => {
    const {user} = req.query;
    res.send(`Welcome to get resuest @${user} `)
})


app.post("/register", (req, res)=> {
  //  console.log(req.body);
  const {user, password} = req.body;
    res.send(`Welcome to post request ${user}`)
})




app.listen(port, ()=> {
    console.log(`App is listening of Port ${port}!`);
})