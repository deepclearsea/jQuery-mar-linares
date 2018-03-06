// cuando el raton esta encima de la imagen aparece el mensaje
// se podria hacer con mouseover/mouseout pero mejor con hover

$("#imagen1").hover(function () {
    $("#mensaje_img1").css("visibility", "visible");
},
// esta coma del medio es como el "else" en processing
function () {
    $("#mensaje_img1").css("visibility", "hidden")
}
);