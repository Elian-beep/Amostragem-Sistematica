const radioAleatorio = document.getElementById('radioAleatorio');
const radioDigitado = document.getElementById('radioDigitado');
const nSorteado = document.documentElement('nSorteado');

function AbledInput(){
    if(nSorteado.disabled == true){
        nSorteado.disabled = false;
        console.log('tentou desabilitar');
    }
}

function DisabledInput(){
    if(nSorteado.disabled == false){
        nSorteado.disabled = true;
        console.log('tentou abilitar');
    }
}