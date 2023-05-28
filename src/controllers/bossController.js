var bossModel = require("../models/bossModel");

function testar(req, res) {
    console.log("ENTRAMOS NO bossModel");
    res.send("ENTRAMOS NO AVISO CONTROLLER");
}

function boss_pesquisar(req, res) {
    var boss_name = req.params.descricao;

    bossModel.boss_pesquisar(boss_name)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    boss_pesquisar,
    testar
}