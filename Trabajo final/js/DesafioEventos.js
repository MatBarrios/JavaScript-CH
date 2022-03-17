// TOMAR DATOS DEL FORMULARIO WEB


const btnForm = document.getElementById("survey__form"); 

btnForm.addEventListener("submit", sendForm) 


let nombreFrom;
let emailForm;
let modeloForm;

function sendForm (e){ 
    e.preventDefault()
    nombreForm = e.target.children[1].value // dato nombre

    emailForm = e.target.children[4].value // dato email

    modeloForm = e.target.children[6].children[1].value //dato modelo GPU 
};


console.log(modeloForm);
