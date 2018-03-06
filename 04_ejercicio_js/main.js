
// cosas que aparecen por primera vez en la página
$(document).ready(function(){
    $("#anuncio").text("CLICK! para cambiar de color")
    .hide()
    .fadeIn(3000)
    $("#anuncio").css("width", "500px")
    $("#anuncio").css("height", "500px")
}
);

// array de colores
let colores = ["blue","yellow","red","grey","green","orange","purple"];

$("#anuncio").on("click", function () {
    // color aleatorio de los de dentro del array
    let color = colores[Math.floor(Math.random() * colores.length)];
    $("#anuncio").css("background-color", color)
});
