let express = require('express');
const { User } = require('../models/User');
let router = express.Router()

router.get("", (req, res) => {
    res.send("hey there")
})

router.post("/create/:name", async (req, res) => {
    let message
    try {
        const User = await User.create({
        username: req.params.name
        })
        message =
        {
            msg: "User created",
            user
        }
    } catch (err) {
        console.log(err)
        message="User failed to create"
    }
    res.send(JSON.stringify(message))
})

module.exports = router;

