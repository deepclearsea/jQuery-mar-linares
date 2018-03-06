// El objeto desparece
$("#cerrar").on("click", function () {
    $("#banner").remove();
});

// Se sustituye el objeto por el div con el texto
$("img").on("click", function(){
    $(this).replaceWith("<div class='texto'>Añadido al carrito</div>");
});