const checkboxDigitado = document.getElementById('checkboxDigitado');
const inputEnterNumber = document.getElementById('nSorteado');

let forEnterNumber = false;
// inputData__input--disabled

checkboxDigitado.addEventListener("click", () => {
    if(!forEnterNumber){
        inputEnterNumber.style.transition = "1s";
        inputEnterNumber.style.display = "block";
        forEnterNumber = true;
    }else{
        inputEnterNumber.style.display = "none";
        forEnterNumber = false;
    }
});