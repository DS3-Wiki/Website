<<<<<<< HEAD
var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/buildController");

router.get("/ultimas/:build_buscar", function (req, res) {
    medidaController.build_buscar(req, res);
});

router.get("/tempo-real/:build_inserir", function (req, res) {
    medidaController.build_inserir(req, res);
})

=======
var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/buildController");

router.get("/ultimas/:build_buscar", function (req, res) {
    medidaController.build_buscar(req, res);
});

router.get("/tempo-real/:build_inserir", function (req, res) {
    medidaController.build_inserir(req, res);
})

>>>>>>> 30fa5cb46a585bad01c4164aff723142bfb39cd7
module.exports = router;