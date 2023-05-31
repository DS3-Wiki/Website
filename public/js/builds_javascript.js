
var numero = 10;
var classes = [];

var magia_var = false;
var fogo_var = false;
var raio_var = false;
var escuridao_var = false;
var standard_var = false;

var array_itens = [];

// STATUS

function magia() {
    var magia_html = document.getElementById("id_magia")

    if (magia_var) {
        magia_var = false;
        magia_html.classList.add("status_damage_hover")
        return item_por_status();
    } else {
        magia_var = true;
        return item_por_status();
    }
}

function fogo() {
    if (fogo_var) {
        fogo_var = false;
        return item_por_status();
    } else {
        fogo_var = true;
        return item_por_status();
    }
}

function raio() {
    if (raio_var) {
        raio_var = false;
        return item_por_status();
    } else {
        raio_var = true;
        return item_por_status();
    }
}

function escuridao() {
    if (escuridao_var) {
        escuridao_var = false;
        return item_por_status();
    } else {
        escuridao_var = true;
        return item_por_status();
    }
}

function standard() {
    if (standard_var) {
        standard_var = false;
        return item_por_status();
    } else {
        standard_var = true;
        return item_por_status();
    }
}

//  ITEM 

async function item_todos() {

    console.log("Estou antes do try")
    try {   
        const response = await fetch("/build/item_todos");
        
        const items = await response.json();
        array_itens.push(items);
        
        // items.forEach((item) => {
        //   array_itens.push(item);
          
        //   var each_item = document.createElement('div');
        //   each_item.id = "id_each_item";
        //   each_item.innerHTML = `
                    
        //     <br>
        //     <div>Nome: ${array_itens[item].weapon_name}<div>
            
        //     `
        //     document.getElementById('div_itens').appendChild(each_item);             

        // });

        for(i=0; array_itens.length; i++){

        }
        console.log(array_itens)
      } catch (error) {
        console.log(error);
      }
}

function item_por_status() {
    console.log("Estou na item_por_status")
    item_todos();
    

}

function item_buscar() {


    var item_nome_var = input_item_buscar.value

    if (item_nome_var == '') {
        alert("Não se pode pesquisar um campo vazio")

        return false;
    }

    console.log("ITEM PESQUISADO: ", item_nome_var);

    fetch(`/build/${item_nome_var}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            item_buscar_server: item_nome_var,
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO item_buscar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

            });

        } else {

            console.log("Houve um erro ao tentar buscar o item específico!");

            resposta.text().then(texto => {
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

// CLASSE

function cadastrar_classe() {
    var build = {
        nome: input_nome.value,
        atributos: {
            Vigor: atributo_Vigor.value,
            Attunement: atributo_Attunement.value,
            Endurence: atributo_Endurence.value,
            Vitality: atributo_Vitality.value,
            Strength: atributo_Strength.value,
            Dexterity: atributo_Dexterity.value,
            Intelligence: atributo_Intelligence.value,
            Faith: atributo_Faith.value,
            Luck: atributo_Luck.value
        }
    }

    classes.push(build)
}

//  CADASTRO E LOGIN 

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

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

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

            limparFormulario();
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

//  BOSSES 
function entrar() {
    aguardar();

    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "" || senhaVar == "") {
        mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";
        finalizarAguardar();
        return false;
    }
    else {
        alert("Erro ao efetuar o cadastro")
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "./dashboard/cards.html";
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




