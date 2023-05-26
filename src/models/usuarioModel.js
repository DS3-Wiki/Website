var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM User;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function login(email, password) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function login(): ", email, password)
    var instrucao = `
        SELECT * FROM usuario  
            WHERE email = '${email}' AND password = '${password}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificacao(name, email) {
    var instrucao = `
        SELECT * FROM usuario 
            WHERE nome = '${name}' or email = '${email}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);

    if(database.executar(instrucao)){
        return alert("Já existe um usuário mesmo nome ou email que você, Por favor tente outro")
    }
    else{
        cadastrar(name, email, password)
    };
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(name, email, password) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", name, email, password);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    
    var instrucao = `
        INSERT INTO usuario (nome, email, password) VALUES
             ('${name}', '${email}', '${password}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    login,
    cadastrar,
    listar,
};