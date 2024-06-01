const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const MONGOOSE_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGOOSE_URL);
}

// app.get("/testListing", async (req, res) => {
//   const list = new Listing({
//     title: "New Villa",
//     description: "Beach On the Way",
//     price: 12000,
//     location: "calCugate Goa",
//     country: "INDIA",
//   });
//   await list.save();
//   console.log("Listing in DB");

//   res.send("Successful testing");
// });

app.get("/listings", (req, res) => {
  Listing.find({})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  res.send("Success");
});

app.get("/", (req, res) => {
  res.send("Root is Working");
});

app.listen(8080, () => {
  console.log(`App is listening on port 8080`);
});
