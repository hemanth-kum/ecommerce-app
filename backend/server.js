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

mongoose.connect("mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/ecommerce?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


app.get("/", (req, res) => {
  res.send("Server working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});