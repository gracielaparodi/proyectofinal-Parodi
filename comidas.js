/*https://api.spoonacular.com/recipes/complexSearch?apiKey=eedb815cb02141959112d67b9eb87e36'*/

function Receta() {
    let EleccionReceta = document.getElementById("EleccionReceta").value
    let MostrarReceta = ""
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=eedb815cb02141959112d67b9eb87e36&query=${EleccionReceta}`
    fetch(url)
        .then(function cogerRespuesta(respuesta) {
            return respuesta.json();
        })
        .then(function cogerDatos(datos) {

            for (let i = 0; i < datos.results.length; i++) {
                MostrarReceta += `
<div> 
<h1>${datos.results[i].title}</h1>
<img src="${datos.results[i].image}" alt= "imagen"/>
<div id="main-holder"> <button  class="btn btn-outline-light"; style="background-color: #f39aaf"; onclick="MostrarIngredientes(${datos.results[i].id})"> Ingredientes</button> </div>
<div id="Ingredientes${i}"></div>
</div>
`}

            document.getElementById("MostrarIMGRecetas").innerHTML = MostrarReceta
            console.log(datos)
        });
}
function MostrarIngredientes(id) {
    let url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=eedb815cb02141959112d67b9eb87e36`
    console.log(id)
    fetch(url)
        .then(function cogerRespuesta(respuesta) {
            return respuesta.json();
        })
        .then(function cogerDatos(datos) {
            console.log(datos)
        })
}