<<<<<<< HEAD
var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});



router.get("/pesquisar/:id_boss", function (req, res) {
    avisoController.boss_pesquisar(req, res);
});



=======
var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});



router.get("/pesquisar/:id_boss", function (req, res) {
    avisoController.boss_pesquisar(req, res);
});



>>>>>>> 30fa5cb46a585bad01c4164aff723142bfb39cd7
module.exports = router;