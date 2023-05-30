var buildModel = require("../models/buildModel");

// BUILD

function build_buscar(req, res) {

    var name = req.body.name;

    console.log('As builds estão sendo buscadas');

    buildModel.build_buscar(name).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as builds.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function build_inserir(req, res) {

    var idBuild = req.params.idBuild;
    var perks = req.params.perks;
    var name = req.params.name;
    var fkUser = req.params.fkUser;

    console.log(`As builds estão sendo inseridas`);

    buildModel.build_inserir(idBuild, perks, name, fkUser).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao inserir as builds.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function item_todos(req, res) {
    buildModel.item_todos()
      .then((response) => {
        res.json(response);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json(error.sqlMessage);
      });
  }

function item_buscar(req, res) {

    var item_name = req.body.item_name_server;

    console.log('As builds estão sendo buscadas');

    buildModel.item_buscar(item_name).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o item.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    build_buscar,
    build_inserir,
    item_buscar,
    item_todos
}