var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});



router.get("/pesquisar/:id_boss", function (req, res) {
    avisoController.boss_pesquisar(req, res);
});



module.exports = router;