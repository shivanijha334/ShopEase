const express = require("express");

const router = express.Router();

const {
    register,
    login
} = require("../controllers/userController");
console.log(login);

router.post("/register", register);

router.post("/login", (req, res, next) => {
    console.log("LOGIN ROUTE HIT");
    next();
}, login);

console.log("Login route registered");

module.exports = router;