const nPopulacao = document.getElementById("nPopulacao");
const nAmostra = document.getElementById("nAmostra");
const nInputSorteado = document.getElementById("nSorteado");
const resultNSorteado = document.getElementById("resultNSorteado");
const resultadoBruto = document.getElementById("resultadoBruto");

const escolhaGerarNumeroAleatorio = document.querySelector("#radioAleatorio");
const escolhaDigitarNumero = document.querySelector("#radioDigitado");

const btnClear = document.getElementById("btnClear");

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
    resultNSorteado.innerHTML = nSorteado;

    for (var i = 0; i < parseInt(nAmostra.value); i++) {
        calcItem = nSorteado + (i * intervaloAmostragem);
        resultados.push(calcItem);
        createElementResult(calcItem);
    }
    // resultadoBruto.innerHTML = resultados;
}

function createElementResult(calcItem){
    let li = document.createElement('li');
    li.innerHTML = calcItem;
    resultadoBruto.appendChild(li);

    console.log(calcItem);
}

function clearAll() {
    btnClear.addEventListener('click', () => {
        nPopulacao.value = '';
        nAmostra.value = '';
        nInputSorteado = '';
        nSorteado = '';
        resultados.splice(0, resultados.length);
    });
}