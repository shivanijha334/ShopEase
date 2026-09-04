const User = require("../models/user");

exports.register = async (req, res) => {

    try {

        const user = new User(req.body);

        await user.save();

        res.json({
            message: "User Registered Successfully",
            user
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            });
        }

        if (user.password !== password) {
            return res.status(400).json({
                message: "Wrong password"
            });
        }

        res.json({
            message: "Login Successful",
            user
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};