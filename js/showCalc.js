const nPopulacao = document.getElementById("nPopulacao");
const nAmostra = document.getElementById("nAmostra");
const nInputSorteado = document.getElementById("nSorteado");
const resultNSorteado = document.getElementById("resultNSorteado");
const resultadoBruto = document.getElementById("resultadoBruto");

const escolhaDigitarNumero = document.querySelector("#checkboxDigitado");

const btnClear = document.getElementById("btnClear");

let calcItem, nSorteado;
let resultados = [];

function calcAS() {
    const precaution = allPrecaution();
    if(!precaution){
        return;
    }
    resultadoBruto.textContent = "";
    resultados.splice(0, resultados.length);
    let intervaloAmostragem = nPopulacao.value / nAmostra.value;

    if (!escolhaDigitarNumero.checked) {
        nSorteado = parseInt(Math.random() * (intervaloAmostragem - 1) + 1);
    } else if (escolhaDigitarNumero.checked) {
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

function createElementResult(calcItem) {
    let div = document.createElement('div');
    div.innerHTML = calcItem.toFixed(2);
    div.classList.add('itemResultado');
    resultadoBruto.appendChild(div);

    console.log(calcItem);
}

function allPrecaution(){
    // verificar se a amostra é menor que a população

    if(parseFloat(nPopulacao.value)<parseFloat(nAmostra.value)){
        alert('O valor da amostra não pode ser maior que da população.');
        return false;
    }if(escolhaDigitarNumero.checked && parseFloat(nInputSorteado.value.length) == 0){
        alert('Digite o número pré sorteado');
        return false;
    }if(!escolhaDigitarNumero.checked){
        return true;
    }if(escolhaDigitarNumero.checked && (parseFloat(nInputSorteado.value) > parseFloat(nPopulacao.value)) || (parseFloat(nInputSorteado.value) < parseFloat(nAmostra.value)) ){
        alert('O número sorteado deve estar entre '+ nPopulacao.value +' e '+ nAmostra.value);
        return false;
    }else{
        return true;
    }
}

function clearAll() {
    nPopulacao.value = '';
    nAmostra.value = '';
    nInputSorteado.value = '';
    nSorteado = '';
    resultados.splice(0, resultados.length);

    resultNSorteado.textContent = "";
    resultadoBruto.textContent = "";

    if(nInputSorteado != null){
        nInputSorteado = '';
    }
}