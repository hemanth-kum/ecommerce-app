const router = require("express").Router();
const Order = require("../models/Order");
const auth = require("../middleware/authMiddleware");


router.post("/", auth, async (req, res) => {
  const order = new Order({
    userId: req.user.id,
    products: req.body.products,
    total: req.body.total
  });

  await order.save();
  res.json(order);
});


router.get("/", auth, async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
});

module.exports = router;