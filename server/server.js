const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
console.log("USING THIS SERVER FILE")

connectDB();

app.use(cors());
app.use(express.json());





console.log("User routes loaded");
app.use((req,res,next)=>{
    console.log(req.method, req.url);
    next();
});
console.log("Mounting user routes");


app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
    res.send("E-Commerce Server Running...");
});

app.post("/test-login", (req, res) => {
    res.json({
        message: "Test login working"
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});