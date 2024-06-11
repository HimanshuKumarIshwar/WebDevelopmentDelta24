const mongoose = require("mongoose");
main()
  .then(() => console.log("Connection SuccessFull"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo");
}

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
});

const Order = mongoose.model("Order", orderSchema);

const customerSchema = mongoose.Schema({
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};

findCustomer();
// const addCustomer = async () => {
//     let cust1 = new Customer({
//       name: "Himanshu Kumar",
//     });

//     let order1 = await Order.findOne({ item: "Chips" });
//     let order2 = await Order.findOne({ item: "Somasa" });
//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let res = await cust1.save();

//   console.log(res);
// };
// addCustomer();

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "Somasa", price: 12 },
//     { item: "Chips", price: 10 },
//     { item: "Chocolate", price: 40 },
//   ]);

//   console.log(res);
// };

// addOrders();
