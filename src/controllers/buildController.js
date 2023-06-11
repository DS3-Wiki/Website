var buildModel = require("../models/buildModel");

// BUILD

function build_todos(req, res) {

    console.log('Todas as builds estão sendo buscadas');

    buildModel.build_todos().then(function (resultado) {
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
    
    var fk_user = req.params.fk_user;
    var name = req.params.name;
    var strength = req.params.strength;
    var dexterity = req.params.dexterity;
    var intelligence = req.params.intelligence;
    var faith = req.params.faith;
    var luck = req.params.luck;

    console.log(`As builds estão sendo inseridas`);

    buildModel.build_inserir(fk_user, name , strength, dexterity, intelligence, faith, luck).then(function (resultado) {
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

function item_por_encantamento(req, res) {

    var encantamento = req.params.encantamento;

    console.log('As builds estão sendo buscadas');

    buildModel.item_por_encantamento(encantamento).then(function (resultado) {
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

function item_por_atributo(req, res) {

    var encantamento = req.params.encantamento;

    console.log('As builds estão sendo buscadas');

    buildModel.item_por_encantamento(encantamento).then(function (resultado) {
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

function item_por_tipo(req, res) {

    var encantamento = req.params.encantamento;

    console.log('As builds estão sendo buscadas');

    buildModel.item_por_encantamento(encantamento).then(function (resultado) {
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
    build_todos,
    build_inserir,
    item_todos,
    item_por_encantamento,
    item_por_atributo,
    item_por_tipo,
}