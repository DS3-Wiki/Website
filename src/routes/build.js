var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/buildController");

router.get("/ultimas/:build_buscar", function (req, res) {
    medidaController.build_buscar(req, res);
});

router.get("/tempo-real/:build_inserir", function (req, res) {
    medidaController.build_inserir(req, res);
})

module.exports = router;