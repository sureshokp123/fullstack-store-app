const router = require("express").Router();
const Order = require("../models/Order");
const auth = require("../middleware/auth");

// Place Order (User only)
router.post("/", auth, async (req, res) => {
  console.log("Order API HIT"); // ✅ add this
  console.log("User:", req.user);
  console.log("Body:", req.body);

  try {
    const order = await Order.create({
      userId: req.user.id,
      products: req.body.products,
      total: req.body.total
    });

    res.json(order);
  } catch (err) {
    console.log("DB ERROR:", err);
    res.status(500).json({ msg: "Order failed" });
  }
});


// Get My Orders
router.get("/my", auth, async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
});

// Cancel Order
router.put("/cancel/:id", auth, async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: "cancelled" },
    { new: true }
  );
  res.json(order);
});

module.exports = router;
