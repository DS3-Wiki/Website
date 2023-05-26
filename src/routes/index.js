<<<<<<< HEAD
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index", { title: "Express" });
});

=======
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index", { title: "Express" });
});

>>>>>>> 30fa5cb46a585bad01c4164aff723142bfb39cd7
module.exports = router;