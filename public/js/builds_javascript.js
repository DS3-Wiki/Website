
var array_itens = [];
var array_bosses = [];
var array_bosses_fraquezas = []
var items = [];

var input_item_nome = document.getElementById('input_item_buscar').value;
var boss_name_input = document.getElementById('input_boss_name');
var div_bosses = document.getElementById('div_all_bosses');
var div_itens = document.getElementById('div_itens')
//  ITEM 

document.addEventListener("DOMContentLoaded", async function item_todos() {

    array_itens = [];

    console.log("Estou antes do try")
    try {   
        const response = await fetch("/build/item_todos");
        
        items  = await response.json();

        items.forEach((item) => { 

                var each_item = document.createElement('div');
                each_item.id = "id_each_item";
                each_item.innerHTML = `
                        
                <br>
                <h3>${item.name}</h3>
                <table class="tabela_itens">
                    <tr>
                        <th>Escala</th>
                        <th>Dano Físico</th>
                        <th>Dano Mágico</th>
                        <th>Dano Fogo</th>
                        <th>Dano Raio</th>
                        <th>Dano Escuridão</th>
                    </tr>
                    <tr>
                        <td>${item.Str}/${item.Dex}/${item.Int}/${item.Faith}/${item.Luck}</td>
                        <td>${item.Physical}</td>
                        <td>${item.Magic}</td>
                        <td>${item.Fire}</td>
                        <td>${item.Lightning}</td>
                        <td>${item.Dark}</td>
                    </tr>
                </table>
                
                
                `
                document.getElementById('div_itens').appendChild(each_item);             
    
        });

        // for(i=0; array_itens.length; i++){
            
        // }
        console.log(array_itens)
      } catch (error) {
        console.log(error);
      }
})

function item_por_nome() {

    div_itens.innerHTML = '';

    if(document.getElementById('input_item_buscar').value == ''){
        for(i = 0; i < items.length; i++){
                
                var each_item = document.createElement('div');
                each_item.id = "id_each_item";
                each_item.innerHTML = `
                        
                    <br>
                    <h3>${items[i].name} - ${items[i].enchatment}</h3>
                    <table class="tabela_itens">
                        <tr>
                            <th>Escala</th>
                            <th>Dano Físico</th>
                            <th>Dano Mágico</th>
                            <th>Dano Fogo</th>
                            <th>Dano Raio</th>
                            <th>Dano Escuridão</th>
                        </tr>
                        <tr>
                            <td>${items[i].Str}/${items[i].Dex}/${items[i].Int}/${items[i].Faith}/${items[i].Luck}</td>
                            <td>${items[i].Physical}</td>
                            <td>${items[i].Magic}</td>
                            <td>${items[i].Fire}</td>
                            <td>${items[i].Lightning}</td>
                            <td>${items[i].Dark}</td>
                        </tr>
                    </table>
                    
                    
                    `
                div_itens.appendChild(each_item);    
        
     }
    }else{
        for(i = 0; i < items.length; i++){
            if((items[i].name).includes(document.getElementById('input_item_buscar').value)){
                
                var each_item = document.createElement('div');
                each_item.id = "id_each_item";
                each_item.innerHTML = `
                        
                    <br>
                    <h3>${items[i].name} - ${items[i].enchatment}</h3>
                    <table class="tabela_itens">
                        <tr>
                            <th>Escala</th>
                            <th>Dano Físico</th>
                            <th>Dano Mágico</th>
                            <th>Dano Fogo</th>
                            <th>Dano Raio</th>
                            <th>Dano Escuridão</th>
                        </tr>
                        <tr>
                            <td>${items[i].Str}/${items[i].Dex}/${items[i].Int}/${items[i].Faith}/${items[i].Luck}</td>
                            <td>${items[i].Physical}</td>
                            <td>${items[i].Magic}</td>
                            <td>${items[i].Fire}</td>
                            <td>${items[i].Lightning}</td>
                            <td>${items[i].Dark}</td>
                        </tr>
                    </table>
                    
                    
                    `
                div_itens.appendChild(each_item);    
        }
     } }
}

// BOSS 

document.addEventListener("DOMContentLoaded", function boss_todos() {
    var  response = fetch("/boss/pesquisar", {
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

                bosses_fraquezas()
                console.log(array_bosses_fraquezas);
                console.log('Passei pelo bosses_fraquezas()');
                
                for (i = 0; i < array_bosses.length; i++) {
    
                        var each_boss = document.createElement('div');
                        each_boss.id = "div_bosses_id";
                        
                        each_boss.innerHTML = `
                            <div>
                                <h3> ${array_bosses[i].name}</h3>
                                <img src="${array_bosses[i].src}">
                            </div>
                            <div class="div_all_bosses_status">
                                <p>HP: ${array_bosses[i].health_points}</p>
                                <p>Almas: ${array_bosses[i].souls}</p>
                                <p>Level: ${array_bosses[i].level}</p>
                                <div>
                                    <h3>Resistências</h3>
                                    <p>${array_bosses[i].resistance}</p
                                </div>
                                <div>
                                    <h3>Imunidades</h3>
                                    <p>${array_bosses[i].weakness}</p
                                </div>
                            </div>
                           
                        `
                        document.getElementById('div_all_bosses').appendChild(each_boss);

                }
         })}})
})

function bosses_fraquezas(){

    array_bosses_fraquezas = []

    var  response = fetch("/boss/fraquezas", {
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
                
                array_bosses_fraquezas = json;
                console.log(array_bosses_fraquezas);
                 return
                 
         })}})
}

function boss_pesquisar(){
    div_bosses.innerHTML = '';

    if(document.getElementById('input_boss_buscar').value == ""){
        for (i = 0; i < array_bosses.length; i++) {
        
            var each_boss = document.createElement('div');
            each_boss.id = "div_bosses_id";
            
            each_boss.innerHTML = `
                <div>
                    <h3> ${array_bosses[i].name}</h3>
                    <img src="${array_bosses[i].src}">
                </div>
                <div class="div_all_bosses_status">
                    <p>HP: ${array_bosses[i].health_points}</p>
                    <p>Almas: ${array_bosses[i].souls}</p>
                    <p>Level: ${array_bosses[i].level}</p>
                    <div>
                        <h3>Resistências</h3>
                        <p>${array_bosses[i].resistance}</p
                    </div>
                    <div>
                        <h3>Imunidades</h3>
                        <p>${array_bosses[i].weakness}</p
                    </div>
                </div>
            
                `
                document.getElementById('div_all_bosses').appendChild(each_boss);
        }
    }else{
    for (i = 0; i < array_bosses.length; i++) {
        if((array_bosses[i].name).includes(document.getElementById('input_boss_buscar').value)){
    
            var each_boss = document.createElement('div');
            each_boss.id = "div_bosses_id";
            
            each_boss.innerHTML = `
                <div>
                    <h3> ${array_bosses[i].name}</h3>
                    <img src="${array_bosses[i].src}">
                </div>
                <div class="div_all_bosses_status">
                    <p>HP: ${array_bosses[i].health_points}</p>
                    <p>Almas: ${array_bosses[i].souls}</p>
                    <p>Level: ${array_bosses[i].level}</p>
                    <div>
                        <h3>Resistências</h3>
                        <p>${array_bosses[i].resistance}</p
                    </div>
                    <div>
                        <h3>Imunidades</h3>
                        <p>${array_bosses[i].weakness}</p
                    </div>
                </div>
            
                `
                document.getElementById('div_all_bosses').appendChild(each_boss);

        }
    }
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


