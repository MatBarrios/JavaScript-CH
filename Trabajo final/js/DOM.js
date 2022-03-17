// // obtener texto de la navbar 
// let lista = document.getElementsByClassName("lista");

// console.log(lista[0].innerHTML);
// console.log(lista[1].innerHTML);


// //modificar el texto del navbar
// lista[0].innerText = "About";

// console.log(lista[0]);
// console.log(lista[0].innerHTML);


// //agregar nuevo texto

// let textoNuevo = document.createElement("p");

// textoNuevo.innerHTML = "<h4>proximo servicio pronto.</h4>";

// document.body.append(textoNuevo);


// // seleccionar todas las etiquetas con las mismas clases

// let claseListas = document.querySelectorAll(".lista");

// console.log(claseListas)


var d = document.getElementById ("dibujoRed");
var lienzo = d.getContext("2d");


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea("red", 50, 40, 100, 20);









