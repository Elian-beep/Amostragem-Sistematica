const nPopulacao = document.getElementById("nPopulacao");
const nAmostra = document.getElementById("nAmostra");
const resultNSorteado = document.getElementById("resultNSorteado");
const resultadoBruto = document.getElementById("resultadoBruto");

let calcItem;
let resultados = [];

function calcAS() {
    let intervaloAmostragem = nPopulacao.value / nAmostra.value;
    let nSorteado = parseInt(Math.random() * (intervaloAmostragem - 1) + 1);
    // let nSorteado = 2;
    console.log("Numero sorteado: ", nSorteado);
    exibirNumeroSorteado(nSorteado);

    for (var i = 0; i < parseInt(nAmostra.value); i++) {
        calcItem = nSorteado + (i * intervaloAmostragem);
        resultados.push(calcItem);
    }
    exibirResultado(resultados);
}

function exibirNumeroSorteado(nSorteado){
    resultNSorteado.innerHTML = ""+nSorteado+"";
}

function exibirResultado(resultados){
    resultadoBruto.innerHTML = ""+resultados+"";
}