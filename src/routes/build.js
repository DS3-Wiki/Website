var express = require("express");
var router = express.Router();

var buildController = require("../controllers/buildController");

router.get("/ultimas/:build_buscar", function (req, res) {
    buildController.build_buscar(req, res);
});

router.get("/tempo-real/:build_inserir", function (req, res) {
    buildController.build_inserir(req, res);
})

router.get("/item/:item_buscar", function (req, res) {
    buildController.item_buscar(req, res);
});

router.get("/item_todos", (req, res) => {
    buildController.item_todos(req, res);
});

module.exports = router;