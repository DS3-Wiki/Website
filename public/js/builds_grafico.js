
var statisticas = [];

var myChart_perks;

const grafico_perks = document.getElementById('perks');

myChart_perks = new Chart(grafico_perks, {
    type: 'radar',
    data: {
        labels: ['STR', 'DEX', 'INT', 'FTH', 'LCK'],
        datasets: [{
            label: 'Níveis',
            borderColor: '#9B1F1F',
            data: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
    function atualizar_grafico_perks() {

    statisticas = [
        atributo_Strength.value,
        atributo_Dexterity.value,
        atributo_Intelligence.value,
        atributo_Faith.value,
        atributo_Luck.value
    ];
    myChart_perks.data.datasets[0].data = statisticas;
    myChart_perks.update();

    atualizar_grafico_encantamento()
}

var myChart_encantamento;

const grafico_encantamento = document.getElementById('encantamento');

myChart_encantamento = new Chart(grafico_encantamento, {
    type: 'radar',
    data: {
        labels: ['Físico', 'Mágico', 'Fogo', 'Raio', 'Escuridão'],
        datasets: [{
            label: '',
            borderColor: '#9B1F1F',
            data: [],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
    function atualizar_grafico_encantamento() {
    
        fisico = Number(atributo_Dexterity.value) + Number(atributo_Strength.value);
        magico = Number(atributo_Intelligence.value);
        fogo = Number(atributo_Intelligence.value);
        raio = Number(atributo_Faith.value);
        escuridao = (Number(atributo_Faith.value)/2) + (Number(atributo_Intelligence.value)/2);

        statisticas_encantamento = [fisico, magico, fogo, raio, escuridao];

    myChart_encantamento.data.datasets[0].data = statisticas_encantamento;
    myChart_encantamento.update();
}     