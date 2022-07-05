const nPopulacao = document.getElementById("nPopulacao");
const nAmostra = document.getElementById("nAmostra");
const nInputSorteado = document.getElementById("nSorteado");
const resultNSorteado = document.getElementById("resultNSorteado");
const resultadoBruto = document.getElementById("resultadoBruto");

const escolhaGerarNumeroAleatorio = document.querySelector("#radioAleatorio");
const escolhaDigitarNumero = document.querySelector("#radioDigitado");

let calcItem, nSorteado;
let resultados = [];

function calcAS() {
    resultados.splice(0, resultados.length);
    let intervaloAmostragem = nPopulacao.value / nAmostra.value;

    if(escolhaGerarNumeroAleatorio.checked){
        nSorteado = parseInt(Math.random() * (intervaloAmostragem - 1) + 1);
    }else if(escolhaDigitarNumero.checked){
        nSorteado = parseInt(nInputSorteado.value);
    }

    console.log("Numero sorteado: ", nSorteado);
    resultNSorteado.innerHTML = "" + nSorteado + "";

    for (var i = 0; i < parseInt(nAmostra.value); i++) {
        calcItem = nSorteado + (i * intervaloAmostragem);
        resultados.push(calcItem);
    }
    resultadoBruto.innerHTML = resultados;
}