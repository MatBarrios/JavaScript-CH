
//COTIZADOR DE PRESUPUESTO WEB EN BASE A FORMULARIO 
//la finalidad es mostrar: 1) Precio final del producto (rig) elegido, 2) Ganancias diarias del rig elegido.


// Notas aclaratorias del rubro:
// 1) "Rig" es el nombre de una maquina tipo "PC", que genera dinero a traves de la minería de criptomonedas (ilustracion: primera foto en la web) 
// 2) Cada rig se compone principalmente de GPUs (graphic processing units), las cuales son importantes para determinar la potencia del rig, el cual tiene un cupo máximo de seis gpu.




// APARTADO 1 - PERFIL DEL INVERSOR Y BIENVENIDA A LA WEB

// let nombre = prompt("Bienvenido/a a Blockchain Company, cual es tu nombre?");

// alert("Hola " + nombre + "!");


// let riesgo = prompt("Vamos a recomendarte alguno de nuestros productos. ¿Cual es tu perfil de riesgo? (conservador, moderado o agresivo)");

// while(riesgo.toUpperCase() !== "ESC") {

//     if(riesgo.toUpperCase() === "CONSERVADOR") {
//         alert("Te recomedamos nuestro servicio Nro 2: inverti en proyectos de cripto-minería a tasas anuales");

//     } else if (riesgo.toUpperCase() === "MODERADO") {
//         alert("Te aconsejamos armar tu propio Rig de minería con nosotros, podes elegir modelos y cantidad en nuestro formulario web");
    
//     } else  if (riesgo.toUpperCase() === "AGRESIVO") {
//         alert("Te proponemos explorar juntos la tecnología detrás de los tokens criptograficos, para aplicarla a tu negocio");
//     } else {
//         alert("No es un riesgo válido");
//     }
//     break;
// }

// alert("Gracias por responder " + nombre + ", y bienvenido/a.");


// APARTADO 2 - ARRAYS - MODIFICACION DEL ARRAY con push

// Modelos de GPU - Precio - Ganancia diaria en dolares

const GPUs = [
    {modelo: "2060", precio: 600, ganancia: 1},
    {modelo: "3060", precio: 800, ganancia: 3},
    {modelo: "3070", precio: 1000, ganancia: 4},
    {modelo: "3090", precio: 1500, ganancia: 6}];

console.log(GPUs);

GPUs.push({modelo: "3080", precio: 1300, ganancia: 5});

console.log(GPUs);
console.log(GPUs[2]);
console.log(GPUs.slice(0, 2));


// APARTADO 3 - Dato 1 del cotizador: PRECIO FINAL DEL RIG ELEGIDO POR EL CLIENTE

// calculamos el costo de comprar las GPU del Rig, y le sumamos un 20% extra de costos: 

function costoGPU (modeloGPU, cantidadGPU) {

    switch (modeloGPU) {
        
        case GPUs[0].modelo:
            return (600 * cantidadGPU) + (600 * cantidadGPU * 0.2);
            break;

        case GPUs[1].modelo:
            return (800 * cantidadGPU) + (800 * cantidadGPU * 0.2);
            break;

        case GPUs[2].modelo:
            return (1000 * cantidadGPU) + (1000 * cantidadGPU * 0.2);
            break;

        case GPUs[3].modelo:
            return (1500 * cantidadGPU) + (1500 * cantidadGPU * 0.2);
            break;

        case GPUs[4].modelo:
            return (1300 * cantidadGPU) + (1300 * cantidadGPU * 0.2);
            break;

        default:
            return 0;
            break;
    }
}


console.log("costo del rig = " + costoGPU("2060", 6) + " USD"); //ejemplo 1 de input por formulario  
console.log("costo del rig = " + costoGPU("3070", 4) + " USD"); //ejemplo 2 


// APARTADO 4 - Dato 2 del cotizador: GANANCIA DEL RIG ELEGIDO

// Objeto RIG - con métodos: 1) verGanancias, 2) vendido

class Rig {
    constructor(modeloGPU, cantidadGPU) {

    this.modeloGPU = modeloGPU;

    this.cantidadGPU = cantidadGPU;

    this.ganancia = 0;

    this.vendido = false;
    }

    verGanancia() {

        if (this.modeloGPU === "2060") {
            
            return this.ganancia = GPUs[0].ganancia * this.cantidadGPU;
       
        } else if (this.modeloGPU === "3060"){

            return this.ganancia = GPUs[1].ganancia * this.cantidadGPU;

        } else if (this.modeloGPU === "3070") {

            return this.ganancia = GPUs[2].ganancia * this.cantidadGPU;
        
        } else if (this.modeloGPU === "3090") {

            return this.ganancia = GPUs[3].ganancia * this.cantidadGPU;
        
        } else if (this.modeloGPU === "3080") {

            return this.ganancia = GPUs[4].ganancia * this.cantidadGPU;
        
        } else {

            return console.log("something went wrong");
        } 
    }

    vender() {
        this.vendido = true;
    }
};


// incorporación de nuevos objetos
const rig1 = new Rig ("2060", 4);
const rig2 = new Rig ("3090", 6);
const rig3 = new Rig ("3080", 5);

console.log(rig1);
console.log(rig2);
console.log(rig3);

rig1.verGanancia();
rig2.verGanancia();
rig3.verGanancia();

rig1.vender();





