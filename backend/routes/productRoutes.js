const router = require("express").Router();
const Product = require("../models/Product");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});


router.post("/", auth, admin, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

module.exports = router;