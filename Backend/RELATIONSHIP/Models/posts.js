const mongoose = require("mongoose");
main()
  .then(() => console.log("Connection SuccessFull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo");
}

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
});

const postSchema = new mongoose.Schema({
  content: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user = await User.findOne({ username: "HimanshuKumar" });

  let post2 = new Post({
    content: "BY, BY",
    likes: 200,
  });

  post2.user = user;

  await post2.save();
};
addData();
