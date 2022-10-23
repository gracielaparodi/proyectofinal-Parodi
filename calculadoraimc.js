const indice = document.getElementById("Calcular");
indice.addEventListener("click", function (e) {
    e.preventDefault();

    calculateIMC();
});


let pesoInput = document.getElementById("peso");
let alturaInput = document.getElementById("altura");

peso.setAttribute("placeholder", "Su peso en kilogramos");
altura.setAttribute("placeholder", "Su altura en metros");

function calculateIMC() {
    let peso = pesoInput.value;
    let altura = alturaInput.value;
    let imc = Math.round(peso / (altura * altura));
    let mensaje = "";
    let desc = document.getElementById("desc");


    if (imc < 18.5) { swal("BAJO DE PESO | Su imc es " + imc); }
    else if (imc <= 18.50 || imc <= 24.99) { swal("NORMAL | Su imc es " + imc); }
    else if (imc <= 25.00 || imc <= 29.99) { swal("SOBREPESO | Su imc es " + imc); }
    else if (imc <= 30.00 || imc <= 34.99) { swal("OBESIDAD GRADO I  | Su imc es " + imc); }
    else if (imc <= 35.00 || imc <= 39.99) { swal("OBESIDAD GRADO II | Su imc es " + imc); }
    else if (imc < 40) { swal("OBESIDAD GRADO III | Su imc es " + imc); }
}


function bigImg(x) {
    x.style.height = "44px";
    x.style.width = "84px";
}

function normalImg(x) {
    x.style.height = "38px";
    x.style.width = "74px";
}
