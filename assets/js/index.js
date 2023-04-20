var card = document.querySelector("#cardPelicula");
var mostrar = document.getElementById("botonPelicula");

$(document).ready(function () {
    fetch("https://studio-ghibli-films-api.herokuapp.com/api/My%20Neighbor%20Totoro")
        .then(response => response.json())
        .then(datos => generar(datos))

    mostrar.addEventListener("click", () => {
        var pelicula = document.getElementById("sPelicula").value;
        fetch("https://studio-ghibli-films-api.herokuapp.com/api/" + pelicula)
            .then(response => response.json())
            .then(otrosDatos => generar(otrosDatos))
    })

    function generar(datos) {
        card.innerHTML = ""
        card.innerHTML = ` 
                    <img src="${datos.poster}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 id="titulo">${datos.title}</h5>
                        <p class="card-text">${datos.synopsis}</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><span class="fw-bold">Titulo Romanizado:</span> ${datos.hepburn}</li>
                            <li class="list-group-item"><span class="fw-bold">Fecha Estreno:</span> ${datos.release}</li>
                            <li class="list-group-item"><span class="fw-bold">Director:</span> ${datos.director}</li>
                        </ul>
                        <a href="https://studio-ghibli-films-api.herokuapp.com/" class="btn btn-outline-success">Más Información</a>
                    </div>`
    }
});