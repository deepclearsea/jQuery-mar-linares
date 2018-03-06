// primero: cuando pases por img el objeto cambiara el atributo src

// cuando el raton esta encima rio
$("#img1").on("mouseover", function () {
    // esto hace que se cambie el attributo src
    $("#img1").attr("src", "img/rio.jpg")
});

// cuando el raton sale de la imagen arbol
$("#img1").on("mouseout", function () {
    $("#img1").attr("src", "img/arbol.jpg")
});