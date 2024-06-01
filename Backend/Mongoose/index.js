const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connetion success");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// User.insertMany([
//   { name: "Tony", email: "tony@gmail.com", age: 50 },
//   { name: "Peter", email: "peter@gmail.com", age: 53 },
//   { name: "Bruce", email: "Bruce@gmail.com", age: 5 },
// ]).then((res) => {
//   console.log(res);
// });

// const user2 = new User({
//   name: "eve",
//   email: "eve@gmail.com",
//   age: 48,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.find({ age: { $gt: 47 } })
//   .then((res) => {
//     console.log(res[0].name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({ _id: "6659ae3eafb2f95bed98ad47" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Update

// User.updateOne({ name: "Peter" }, { age: 99 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({ name: "Peter" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndUpdate({ name: "Tony" }, { age: 32 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndUpdate(
//   { _id: "6659ab4ca4198bb443a90ba2" },
//   { age: 45 },
//   { new: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteOne({ name: "Tony" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.deleteMany({ age: { $gt: 55 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOneAndDelete({ name: "Adam" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.find({})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.findByIdAndDelete({ _id: "6659ae3eafb2f95bed98ad48" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

User.find({})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
