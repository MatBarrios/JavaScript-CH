// TOMAR DATOS DEL FORMULARIO WEB


const btnForm = document.getElementById("survey__form"); 

btnForm.addEventListener("submit", sendForm) 


let nombreForm;
let emailForm;
let modeloForm;
let cantidadForm;

function sendForm (e){ 
    e.preventDefault()

    console.log(e.target.children[1].value)// dato nombre con visualización por consola

    emailForm = e.target.children[4].value // dato email

    modeloForm = e.target.children[6].children[1].value //dato modelo GPU 

    cantidadForm = e.target.children[8].children[0].value // dato cantidad 
};


// console.log(modeloForm); 

