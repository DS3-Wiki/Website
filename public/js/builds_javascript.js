
var array_itens = [];
var array_itens_filtrados = [];
var array_bosses = [];
var array_bosses_fraquezas = []
var items = [];

var input_item_nome = document.getElementById('input_item_buscar').value;
var boss_name_input = document.getElementById('input_boss_name');
var div_bosses = document.getElementById('div_all_bosses');
var div_itens = document.getElementById('div_itens')


//  ITEM 

document.addEventListener("DOMContentLoaded", async function item_todos() {

    console.log("Estou antes do try")
    try {
        const response = await fetch("/build/item_todos");

        array_itens = await response.json();
        array_itens_filtrados = array_itens

        mostrar_itens(array_itens)

    } catch (error) {
        console.log(error);
    }
})

function item_por_nome() {

    div_itens.innerHTML = '';


    array_itens_filtrados = [];

    if (document.getElementById('input_item_buscar').value == '') {
       mostrar_itens();
    } else {
        for (i = 0; i < array_itens.length; i++) {
            if ((array_itens[i].name).includes(document.querySelector('#input_item_buscar').value)) {

                array_itens_filtrados.push(array_itens[i]);

                var each_item = document.createElement('div');
                each_item.id = "id_each_item";
                each_item.innerHTML = `
                        
                    <br>
                    <p>
                        <span class="item_name_style">${array_itens[i].name}</span> -
                        <span class="item_type_style">${array_itens[i].type}</span> -
                        <span class="item_enchatment_style">${array_itens[i].enchatment}</span>
                    </p>
                    <table class="tabela_itens">
                        <tr>
                            <th>STR</th>
                            <th>DEX</th>
                            <th>INT</th>
                            <th>FTH</th>
                            <th>LCK</th>
                            <th>Dano Físico</th>
                            <th>Dano Mágico</th>
                            <th>Dano Fogo</th>
                            <th>Dano Raio</th>
                            <th>Dano Escuridão</th>
                        </tr>
                        <tr>
                            <td>${array_itens[i].Str}</td>
                            <td>${array_itens[i].Dex}</td>
                            <td>${array_itens[i].Int}</td>
                            <td>${array_itens[i].Faith}</td>
                            <td>${array_itens[i].Luck}</td>
                            <td>${array_itens[i].Physical}</td>
                            <td>${array_itens[i].Magic}</td>
                            <td>${array_itens[i].Fire}</td>
                            <td>${array_itens[i].Lightning}</td>
                            <td>${array_itens[i].Dark}</td>
                        </tr>
                    </table>
                    
                    `
                div_itens.appendChild(each_item);
            }
        }
    }
}

function item_por_encantamento(encantamento) {

    fetch(`/build/item_por_encantamento/${encantamento}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO item_por_encantamento()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                array_itens_filtrados = json;
                console.log(array_itens_filtrados);

                mostrar_itens(array_itens_filtrados)
            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
            });
        }

    }).catch(function (erro) {
    })
}

function item_por_tipo(weapon_type) {
    console.log('estou no item_por_tipo()');

    var array_weapons_type = [];

    if(weapon_type == '') {
        mostrar_itens(array_itens_filtrados);
    }
    else{
        for(i=0; i < array_itens_filtrados.length; i++){

            if(array_itens_filtrados[i].type == undefined) {
                continue
            }

            else if(weapon_type == array_itens_filtrados[i].type){
                array_weapons_type.push(array_itens_filtrados[i])
            }
            
        }
        console.log(array_weapons_type);
        mostrar_itens(array_weapons_type)
    }
}

function item_por_atributo(atributo) {
    if (atributo == 'Str') {

        array_itens_filtrados.sort((a, b,) => b.Str - a.Str)
        mostrar_itens(array_itens_filtrados);
    } else if (atributo == 'Dex') {

        array_itens_filtrados.sort((a, b,) => b.Dex - a.Dex)
        mostrar_itens(array_itens_filtrados);

    } else if (atributo == 'Int') {

        array_itens_filtrados.sort((a, b,) => b.Int - a.Int)
        mostrar_itens(array_itens_filtrados);

    }
    else if (atributo == 'Fth') {

        array_itens_filtrados.sort((a, b,) => b.Faith - a.Faith)
        mostrar_itens(array_itens_filtrados);

    }
    else if (atributo == 'Lck') {

        array_itens_filtrados.sort((a, b,) => b.Luck - a.Luck)
        mostrar_itens(array_itens_filtrados);

    }

}

function mostrar_itens(array) {
    div_itens.innerHTML = '';

    for (var i = 0; i < array.length; i++) {

        if(array[i] == undefined){
            continue
        }
        var each_item = document.createElement('div');
        each_item.id = "id_each_item";
        each_item.innerHTML = `
                
        <br>
        <p>
            <span class="item_name_style">${array[i].name}</span> -
            <span class="item_type_style">${array[i].type}</span> -
            <span class="item_enchatment_style">${array[i].enchatment}</span>
        </p>
        <table class="tabela_itens">
            <tr>
                <th>STR</th>
                <th>DEX</th>
                <th>INT</th>
                <th>FTH</th>
                <th>LCK</th>
                <th>Físico</th>
                <th>Mágico</th>
                <th>Fogo</th>
                <th>Raio</th>
                <th>Escuridão</th>
            </tr>
            <tr>
                <td>${array[i].Str}</td>
                <td>${array[i].Dex}</td>
                <td>${array[i].Int}</td>
                <td>${array[i].Faith}</td>
                <td>${array[i].Luck}</td>
                <td>${array[i].Physical}</td>
                <td>${array[i].Magic}</td>
                <td>${array[i].Fire}</td>
                <td>${array[i].Lightning}</td>
                <td>${array[i].Dark}</td>
            </tr>
        </table>
        `
        document.getElementById('div_itens').appendChild(each_item);
    }
}

// BOSS 

document.addEventListener("DOMContentLoaded", function bosses_fraquezas() {

    fetch("/boss/fraquezas", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO bosses_fraquezas!")
        console.log(resposta);
        if (resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                array_bosses_fraquezas = json
                console.log(array_bosses_fraquezas);

            })
        }
    })
})

document.addEventListener("DOMContentLoaded", function boss_todos() {
    fetch("/boss/pesquisar", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO boss_pesquisar!")
        console.log(resposta);
        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);

                array_bosses = json;

                console.log(array_bosses_fraquezas);
                console.log('Passei pelo bosses_fraquezas()')
                mostrar_bosses();
            })
        }
    })
})

function boss_pesquisar() {
    div_bosses.innerHTML = '';

    if (document.getElementById('input_boss_buscar').value == "") {
        mostrar_bosses();
    } else {
        for (i = 0; i < array_bosses.length; i++) {
                if ((array_bosses[i].name).includes(document.getElementById('input_boss_buscar').value)) {

                var id_boss = array_bosses[i].id_boss;
        
                var weakness = [];
                var resistance = [];
        
        
                for (j = 0; j < array_bosses_fraquezas.length; j++) {
        
                    if (id_boss == array_bosses_fraquezas[j].fk_boss) {
        
                        if (array_bosses_fraquezas[j].effect_status == 'Weakness') {
                            weakness.push(array_bosses_fraquezas[j].status);
                        } else {
                            resistance.push(array_bosses_fraquezas[j].status);
                        }
        
                    }
                }
        
                var each_boss = document.createElement('div');
                each_boss.id = "div_bosses_id";
        
                each_boss.innerHTML = `
                    <div>
                        <h3> ${array_bosses[i].name}</h3>
                        <img src="${array_bosses[i].src}">
                    </div>
                    <div class="div_all_bosses_status">
                        <p>❤HP: ${array_bosses[i].health_points}</p>
                        <p>Almas: ${array_bosses[i].souls}</p>
                        <p>Level: ${array_bosses[i].level}</p>
                        <div>
                            <h3>Resistências:</h3>
                            <p>- ${weakness}</p
                        </div>
                        <div>
                            <h3>Fraqueza:</h3>
                            <p>- ${resistance}</p
                        </div>
                    </div>
                `
                document.getElementById('div_all_bosses').appendChild(each_boss);
        
            }
        }
    }
}

function mostrar_bosses() {

    div_bosses.innerHTML = '';

    for (i = 0; i < array_bosses.length; i++) {

        var id_boss = array_bosses[i].id_boss;

        var weakness = [];
        var resistance = [];


        for (j = 0; j < array_bosses_fraquezas.length; j++) {

            if (id_boss == array_bosses_fraquezas[j].fk_boss) {

                if (array_bosses_fraquezas[j].effect_status == 'Weakness') {
                    weakness.push(array_bosses_fraquezas[j].status);
                } else {
                    resistance.push(array_bosses_fraquezas[j].status);
                }

            }
        }

        var each_boss = document.createElement('div');
        each_boss.id = "div_bosses_id";

        each_boss.innerHTML = `
            <div>
                <h3> ${array_bosses[i].name}</h3>
                <img src="${array_bosses[i].src}">
            </div>
            <div class="div_all_bosses_status">
                <p>❤HP: ${array_bosses[i].health_points}</p>
                <p>Almas: ${array_bosses[i].souls}</p>
                <p>Level: ${array_bosses[i].level}</p>
                <div>
                    <h3>Resistências:</h3>
                    <p>- ${weakness}</p
                </div>
                <div>
                    <h3>Fraqueza:</h3>
                    <p>- ${resistance}</p
                </div>
            </div>
        `
        document.getElementById('div_all_bosses').appendChild(each_boss);

    }
}

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


