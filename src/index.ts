/*  •Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras

•Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no.  */

let precioUnitario: number = Number(prompt("Ingrese el precio unitario: "))
let cantidad: number = Number(prompt("Ingrese la cantidad de productos comprados: "))
let mes: number = Number(prompt("Ingrese, en número, el mes de cuando efectuó su compra: "))
let precioTotal:number = precioUnitario * cantidad;
let descuentoOctubre: number = precioTotal - (precioTotal * 0.15)

if (mes === 10) {
  console.log("Por haber comprado en el mes de Octubre usted recibe un 15% de descuento en su compra, el total con descuento es de: ", descuentoOctubre)
  console.log(descuentoOctubre)
} else {
  console.log("El total de su compra es de: ", precioTotal)
}

/* ¿Por qué si pongo la variable "descuentoOctubre" en el console.log 
que va con descuento NO aparece en consola? Tuve que poner un cosole.log
aparte para que pueda aparecer. */

