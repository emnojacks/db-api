let express = require('express');
let router = express.Router()

router.get("", (req, res) => {
    res.send("hey there")

})

module.exports = router;

