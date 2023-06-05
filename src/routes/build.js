var express = require("express");
var router = express.Router();

var buildController = require("../controllers/buildController");

router.get("/ultimas/:build_buscar", function (req, res) {
    buildController.build_buscar(req, res);
});

router.get("/tempo-real/:build_inserir", function (req, res) {
    buildController.build_inserir(req, res);
})

router.get("/item_todos", (req, res) => {
    buildController.item_todos(req, res);
});

router.get("/item_por_encantamento/:encantamento", function (req, res) {
    buildController.item_por_encantamento(req, res);
});

router.get("/item_por_atributo/:atributo", function (req, res) {
    buildController.item_por_atributo(req, res);
});

router.get("/item_por_tipo/:tipo", function (req, res) {
    buildController.item_por_tipo(req, res);
});

module.exports = router;