const router = require("express").Router();
const Product = require("../models/Product");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

// Public
router.get("/", async (req, res) => {
  res.json(await Product.find());
});

// Admin Add
router.post("/", auth, admin, async (req, res) => {
  res.json(await Product.create(req.body));
});

// Admin Delete
router.delete("/:id", auth, admin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
});

module.exports = router;
