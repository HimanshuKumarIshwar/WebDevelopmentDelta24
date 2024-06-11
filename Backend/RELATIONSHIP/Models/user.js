const mongoose = require("mongoose");
main()
  .then(() => console.log("Connection SuccessFull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo");
}
const userSchema = new mongoose.Schema({
  username: String,
  address: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  const newUser = new User({
    username: "Himanshu",
    address: [
      {
        location: "p33 wallStreet",
        city: "London",
      },
    ],
  });

  newUser.address.push({
    location: "A22 WalterAdda",
    city: "London",
  });
  const res = await newUser.save();
  console.log(res);
};
addUsers();
