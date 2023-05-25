var medidaModel = require("../models/buildModel");

function build_buscar(req, res) {

    var name = req.params.name;

    console.log('As builds estão sendo buscadas');

    medidaModel.build_buscar(name).then(function (resultado) {
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


function buscar_inserir(req, res) {

    var idBuild = req.params.idBuild;
    var perks = req.params.perks;
    var name = req.params.name;
    var fkUser = req.params.fkUser;

    console.log(`As builds estão sendo inseridas`);

    medidaModel.build_inserir(idBuild, perks, name, fkUser).then(function (resultado) {
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

module.exports = {
    build_buscar,
    build_inserir

}