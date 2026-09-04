const mongoose = require("mongoose");
const Product = require("./models/product");
const connectDB = require("./config/db");

const products = [
  {
    name: "MacBook",
    price: 70000,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description: "Apple MacBook laptop",
    rating: 4.5
  },
  {
    name: "Laptop",
    price: 50000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description: "High performance laptop",
    rating: 4.3
  },
  {
    name: "Mobile",
    price: 20000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description: "Latest smartphone",
    rating: 4.2
  },
  {
    name: "Headphones",
    price: 3000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Wireless headphones",
    rating: 4.4
  },
  {
    name: "Smart Watch",
    price: 5000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Smart fitness watch",
    rating: 4.1
  },
  {
    name: "Tablet",
    price: 25000,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    description: "Powerful tablet device",
    rating: 4.6
  }
];

const seedDB = async () => {
  await connectDB();

  await Product.deleteMany();

  await Product.insertMany(products);

  console.log("6 Products Added Successfully");

  mongoose.connection.close();
};

seedDB();