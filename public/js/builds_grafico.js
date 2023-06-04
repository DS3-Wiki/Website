
    var myChart;

    const ctx = document.getElementById('myChart');

    myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['VGR', 'ATT', 'END', 'VIT', 'STR', 'DEX', 'INT', 'FTH', 'LCK'],
            datasets: [{
                label: 'Níveis',
                data: [20, 12, 30, 60],
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
    function atualizar_grafico() {

        var nivel_total =
            Number(atributo_Vigor.value) +
            Number(atributo_Attunement.value) +
            Number(atributo_Endurence.value) +
            Number(atributo_Vitality.value) +
            Number(atributo_Strength.value) +
            Number(atributo_Dexterity.value) +
            Number(atributo_Intelligence.value) +
            Number(atributo_Faith.value) +
            Number(atributo_Luck.value);

        div_nivel_total.innerHTML = nivel_total;
        var statisticas = [
            atributo_Vigor.value,
            atributo_Attunement.value,
            atributo_Endurence.value,
            atributo_Vitality.value,
            atributo_Strength.value,
            atributo_Dexterity.value,
            atributo_Intelligence.value,
            atributo_Faith.value,
            atributo_Luck.value

        ];
        myChart.data.datasets[0].data = statisticas;
        myChart.update();
    }                    