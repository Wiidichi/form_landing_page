
var planID = document.getElementById('planID');
let textoSpan = document.getElementById("spanID");
let precioA = "500";
let precioB = "1000";
let precioC = "1500";

function seleccionado(){
    for(let i=0;i<planID.length; i++){
        if(planID[i].hasAttribute("selected", "")){
 
            switch(planID[i].value){
                case "basico": 
                textoSpan.innerHTML += precioA;
                break;
                case "intermedio": 
                textoSpan.innerHTML += precioB;
                break;
                case "premium": 
                textoSpan.innerHTML += precioC;
                break;
                default: 
                textoSpan += "--";
            }
        }
    }
}
seleccionado();

function elegirPlan(){
    var planElegido = planID.value;
    if(planElegido=="basico"){
        textoSpan.innerHTML = "$"+precioA;
    }else if(planElegido=="intermedio"){
        textoSpan.innerHTML = "$"+precioB;
    }else if(planElegido=="premium"){
        textoSpan.innerHTML = "$"+precioC;
    }else{
        textoSpan.innerHTML = "--";
    }
}

function verificar(){
    var elementosInputPadre = document.getElementById('formularioID');
    var elementosInputHijo = document.querySelectorAll('input:not([type="submit"])');
    for(let i=0;i<elementosInputHijo.length; i++){
        if(elementosInputHijo[i].value===""){
            document.getElementById("camposIncompletos").removeAttribute("hidden","");
        }else{
            document.getElementById("camposIncompletos").setAttribute("hidden","");
        }
    }

}

