const areaHeader = document.querySelector(".cabecalho");
const areaBody = document.querySelector(".container");
const areaInputsLeft = document.querySelector("#nPopulacao");
const areaInputsRight = document.querySelector("#nAmostra");
const areaResultNumberSample = document.querySelector(".resultNumberSample");

const btnSwitchTheme = document.getElementById('btnTheme');
let isLight = true;

btnSwitchTheme.addEventListener('click', ()=> {
    if(isLight){
        areaHeader.style.background = "#1D232A";
        areaHeader.style.color = "#fff";

        areaBody.style.background = "#15191C";
        areaBody.style.color = "#FFFFFF";

        areaInputsLeft.style.background = "#15191C"
        areaInputsRight.style.background = "#15191C"
        areaInputsLeft.style.color = "#FFFFFF"
        areaInputsRight.style.color = "#FFFFFF"
        areaInputsLeft.style.borderBottom = "1px solid #FFFFFF"
        areaInputsRight.style.borderBottom = "1px solid #FFFFFF"

        areaResultNumberSample.style.borderBottom = "1px solid #FFFFFF"

        isLight = false;
    }else if(!isLight){
        areaHeader.style.background = "#FFFFFF";
        areaHeader.style.color = "#000";

        areaBody.style.background = "#FFFFFF";
        areaBody.style.color = "#000";

        areaInputsLeft.style.background = "#FFFFFF"
        areaInputsRight.style.background = "#FFFFFF"
        areaInputsLeft.style.color = "#000"
        areaInputsRight.style.color = "#000"
        areaInputsLeft.style.borderBottom = "1px solid #000"
        areaInputsRight.style.borderBottom = "1px solid #000"

        areaResultNumberSample.style.borderBottom = "1px solid #000"
        isLight = true;
    }
});

// if(btnSwitchTheme.checked){
//     console.log('ta checado');
// }else{
//     console.log('não ta checado');
// }