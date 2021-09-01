let express = require('express');
const { Post } = require('../models/Post');
let router = express.Router()

router.get("", (req, res) => {
    res.send("this is the posts router")
})

router.post("/create/:content", async (req, res) => {
    let message
    try {
        let post = await Post.create({
        content: req.params.content    
    })
        message =
        {
            message: "post created",
            data: post
        }
    } catch (err) {
        message = {
        message: "Post failed to create" 
        }
    }
    res.send(JSON.stringify(message))
})

module.exports = router;

