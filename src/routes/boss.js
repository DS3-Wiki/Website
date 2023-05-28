var express = require("express");
var router = express.Router();

var bossController = require("../controllers/bossController");

router.get("/", function (req, res) {
    bossController.testar(req, res);
});



router.get("/pesquisar/:id_boss", function (req, res) {
    bossController.boss_pesquisar(req, res);
});



module.exports = router;