var tela_login = document.getElementById("login");
var modal = document.getElementById("modal");
var modal_background = document.getElementById("modal_background")

function modal_to_login() {
    tela_login.style.marginLeft = "0px";
    modal.style.height = "510px";
}

function login() {

    var emailVar = input_login_email.value;
    var passwordVar = input_login_password.value;

    if (emailVar == "" || passwordVar == "") {
        alert("Todos os campos precisam ser preenchidos")
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", passwordVar);

    fetch("/usuarios/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            passwordServer: passwordVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO login()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id_user;

                setTimeout(function () {
                    alert("Login realizado !!")
                    modal_background.style.display = "none";;
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function modal_to_cadastro() {
    tela_login.style.marginLeft = "-397px";
    modal.style.height = "660px";
}
function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nameVar = input_cadastro_name.value
    var emailVar = input_cadastro_email.value;
    var passwordVar = input_cadastro_password.value;

    if (nameVar == "" || emailVar == "" || passwordVar == "") {
        mensagem_erro.innerHTML = "(Todos os campos devem ser preenchidos)";

        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nameServer: nameVar,
            emailServer: emailVar,
            passwordServer: passwordVar,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert("Cadastro realizado !!")
            modal_background.style.display = "none";

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}
