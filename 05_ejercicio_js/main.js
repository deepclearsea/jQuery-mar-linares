$(document).ready(function(){
    $("h1").show()
    $("#carrete").hide()
}
);

$("h1").on("click", function () {
    $("h1").hide()
    $("#carrete").show()
});

// ponemos this en lugar de imagen, para que afecte
// en concreto a la imagen que queremos y no a 
// todas las imágenes de la web
$("img").hover(function () {
    $(this).attr("width", "300px");
},
function () {
    $(this).attr("width", "250pxå");
}
);