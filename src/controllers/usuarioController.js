var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function login(req, res) {
    var email = req.body.emailServer;
    var password = req.body.passwordServer;

    if (email == undefined) {
        res.status(400).send("Seu e-mail não foi encontrado!");
    } else if (password == undefined) {
        res.status(400).send("Sua senha está incorreta!");
    } else {
        
        usuarioModel.login(email, password)
        .then(
            function (resultado) {
                res.json(resultado);
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var name = req.body.nameServer;
    var email = req.body.emailServer;
    var password = req.body.passwordServer;
        
    // Faça as validações dos valores
    if (name == undefined) {
        res.status(400).send("Este nome não é permitido!");
    } else if (email == undefined) {
        res.status(400).send("Este e-mail não é permitido!");
    } else if (password == undefined) {
        res.status(400).send("Esta senha não é permitida");
    }else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
            usuarioModel.cadastrar(name, email, password)
            .then(
                function (resultado) {
                    res.json(resultado);
                })
                .catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    login,
    cadastrar,
    listar,
    testar
}