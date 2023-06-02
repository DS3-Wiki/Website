
var array_itens = [];
var array_bosses = [];
var array_bosses_fraquezas = []
var boss_name_input = document.getElementById('input_boss_name')
//  ITEM 

async function item_todos() {

    array_itens = [];

    console.log("Estou antes do try")
    try {   
        const response = await fetch("/build/item_todos");
        
        const array_itens = await response.json();

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
}

function item_por_nome() {


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

async function item_por_status(encantamento){
    array_itens = [];

    console.log("Estou antes do try")
    try{
        
        const response = await fetch("/build/item_todos");
        
        const items =  await response.json();

        console.log(items);
        console.log("Estou indo para o for");
        for (i = 0; i < array_itens.length; i++) {
            
            if(array_itens[i].enchatment == encantamento){
                var each_item = document.createElement('div');
                each_item.id = "id_each_item";
                each_item.innerHTML = `
                        
                <br>
                <h3>${array_itens[i].name}</h3>
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
                        <td>${array_itens[i].Str}/${array_itens[i].Dex}/${array_itens[i].Int}/${array_itens[i].Faith}/${array_itens[i].Luck}</td>
                        <td>${array_itens[i].Physical}</td>
                        <td>${array_itens[i].Magic}</td>
                        <td>${array_itens[i].Fire}</td>
                        <td>${array_itens[i].Lightning}</td>
                        <td>${array_itens[i].Dark}</td>
                    </tr>
                </table>
                
                
                `
                document.getElementById('div_itens').appendChild(each_item);             
            }
        
    }
}catch (error) {
    console.log(error);
  }
}   

// BOSS 

function boss_pesquisar() {
    input_boss_name.innerHTML = '';
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
                
                bosses_fraquezas()
                console.log(array_bosses_fraquezas);
                console.log('Passei pelo bosses_fraquezas()');
                
                for (i = 0; i < json.length; i++) {
    
                        var each_boss = document.createElement('div');
                        each_boss.id = "div_bosses_id";
                        
                        each_boss.innerHTML = `
                            <div>
                                <h3> ${json[i].name}</h3>
                                <img src="${json[i].src}">
                            </div>
                            <div class="div_all_bosses_status">
                                <p>HP: ${json[i].health_points}</p>
                                <p>Almas: ${json[i].souls}</p>
                                <p>Level: ${json[i].level}</p>
                                <div>
                                    <h3>Resistências</h3>
                                    <p>${json[i].resistance}</p
                                </div>
                                <div>
                                    <h3>Imunidades</h3>
                                    <p>${json[i].weakness}</p
                                </div>
                            </div>
                           
                        `
                        document.getElementById('div_all_bosses').appendChild(each_boss);

                }
         })}})
}

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







