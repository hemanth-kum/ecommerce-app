const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/products", productRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/orders", orderRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("Server working");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});