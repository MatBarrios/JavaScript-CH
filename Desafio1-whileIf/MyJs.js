
// Desafio entregable complementario Nro. 1 -  "Crea un algoritmo utilizando un ciclo"

// Mi algoritmo: devuelve un consejo de inversión dependiendo del input del riesgo.

let riesgo = prompt("cual es tu perfil de riesgo? (conservador, moderado o agresivo)");

while(riesgo.toUpperCase() !== "ESC") {

    if(riesgo.toUpperCase() === "CONSERVADOR") {
        alert("Tu mejor inversión probablemente será plazo fijo o FCI (Fondos Comunes de Inversión");

    } else if (riesgo.toUpperCase() === "MODERADO") {
        alert("Tu mejor inversión probablemente será acciones argentinas o CEDEARS en el mercado de capitales");
    
    } else  if (riesgo.toUpperCase() === "AGRESIVO") {
        alert("Tu mejor inversion probablemente será en criptomonedas");
    } else {
        alert("No es un riesgo válido");
    }
    break;
}

alert("Gracias por participar!");