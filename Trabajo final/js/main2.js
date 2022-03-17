
let balanceTokens = 50;
let Tkn = 1;
let cantidadTkn = 5; //input formulario


// variables COMPRA de Tokens 
const precioTknCompra = 4;
let totalTknCompra = cantidadTkn * precioTknCompra;

console.log(totalTknCompra) //visualizarlo en la web

// variables VENTA de Tokens 
const precioTknVenta = precioTknCompra * 0.7; // 30% menos 
let totalTknVenta = cantidadTkn * precioTknVenta;

console.log(totalTknVenta); // visualizarlo en la web


//funcion q no me permita comprar mas del balance
// array de los tokens del balance. a lo mejor con eso puedo llevar traking de los vendidos 
// declararlo como un objeto - precio compra - precio venta (como transforamiras al dolar en un objeto?)



const btnForm = document.getElementById("survey__form");

btnForm.addEventListener("submit", sendForm)


let modeloForm;

function sendForm (e){
    e.preventDefault()
    let nombreForm = e.target.children[1].value

    let emailForm = e.target.children[4].value

    modeloForm = e.target.children[6].children[1].value

};


console.log(modeloForm);



