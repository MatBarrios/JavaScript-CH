// //funcion que devuelve el % de rentabilidad de una inversion, ingresando el precio bruto de compra y el precio de venta (calcula tambien la comisión de la operación)


let precioCompra = parseInt(prompt("Precio de compra"));
let precioVenta = parseInt(prompt("Precio de venta"));
const comision = x => x * 0.02; 
let comisionInversion = comision(precioCompra);
let precioCompraConComision = precioCompra + comisionInversion;

// console.log(comisionInversion);
// console.log(precioCompraConComision)


function calculoRentabilidad(precioCompraConComision, precioVenta){
    
    let resultado = ((precioVenta - precioCompraConComision)/precioVenta) * 100
    
    return resultado   + "%"
};


//console.log(calculoRentabilidad(32000, 59000));


function rentabilidadFinal(tipoInversion, precioCompra, precioVenta){

    let rentabilidad = calculoRentabilidad(precioCompraConComision, precioVenta)

    return "Tu inversión en " + tipoInversion + "tuvo una rentabilidad del " + rentabilidad
};


console.log(rentabilidadFinal("BTC ", precioCompra, precioVenta));


