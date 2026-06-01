const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  products: Array,
  total: Number,
  status: { type: String, default: "placed" }
});

module.exports = mongoose.model("Order", orderSchema);