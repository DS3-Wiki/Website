var database = require("../database/config");

function build_buscar(name) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT * FROM Build
            WHERE build.name LIKE '${name}%';
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function build_inserir(idBuild, perks, name, fkUser) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `    
        INSERT INTO Build (idBuild, perk, name, fkUser) VALUES
            (${idBuild}, ${perks}, ${name}, ${fkUser});

        INSERT INTO perks
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function item_todos() {

    let instrucaoSql = `
        SELECT * FROM itens;`

    return database.executar(instrucaoSql);
}

function item_buscar(item_name) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT * FROM build_itens
            WHERE name LIKE '${item_name}%';`
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    build_buscar,
    build_inserir,
    item_buscar,
    item_todos
}
