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

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;

                setTimeout(function () {
                    alert("Login realizado !!")
                    modal_background.style.display = "none";;
                }, 1000); // apenas para exibir o loading

            });

        } else {

            alert(`Houve um erro ao realizar o login! \n Erro: ${resposta}`)
            limpar_credenciais()
            resposta.text().then(texto => {
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
        alert("Todos os campos devem ser preenchidos");

        return false;
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

            sessionStorage.EMAIL_USUARIO = json.email;
            sessionStorage.NOME_USUARIO = json.nome;

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        alert(`Houve um erro ao tentar realizar o cadastro \n Erro: ${resposta}`)
        limpar_credenciais()
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function limpar_credenciais(){
    input_login_email.value = "";
    input_login_password.value = "";


    input_cadastro_name.value = "";
    input_cadastro_email.value = "";
    input_cadastro_password.value = "";
}