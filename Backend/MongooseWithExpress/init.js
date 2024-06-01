const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
  .then(() => {
    console.log("Connecting");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsup");
}

let allChats = [
  {
    from: "amit",
    to: "sumit",
    msg: "all The best",
    created_at: new Date(),
  },
  {
    from: "anita",
    to: "ramesh",
    msg: "bring me some fruits",
    created_at: new Date(),
  },
  {
    from: "tony",
    to: "Peter",
    msg: "love you 3000",
    created_at: new Date(),
  },
  {
    from: "Hima",
    to: "Toya",
    msg: "Goods",
    created_at: new Date(),
  },
  {
    from: "raj",
    to: "sam",
    msg: "How are you",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
