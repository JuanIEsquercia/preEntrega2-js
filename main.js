let compradores=[]

let productos=[]


class Item {
    
    constructor(nombre,precio,cantidad) {
    this.nombre=nombre
    this.precio=precio
    this.cantidad=cantidad
}
}

while(confirm("Agregue que productos quiere vender señor")){
    alert("Una vez que no tenga más productos por agregar, cancele la carga =)")
    nombre=prompt("ingrese el nombre del producto").toLocaleLowerCase
    precio=Number(prompt("ingrese el precio del producto"))
    cantidad=Number(prompt("ingrese la cantidad en stok"))

    if(isNaN(precio)||isNaN(cantidad)){
        precio=Number(prompt("ingrese como numero el precio del producto por favor"))
        cantidad=Number(prompt("ingrese como numero la cantidad en stok por favor"))
        
    }

    productos.push= (new Item(nombre,precio,cantidad))
}

let compras=[]
let comprador


while (confirm("Agregue en orden los compradores y cancele cuando no quiere agregar más")) {
    comprador = prompt("Introduzca el nombre del comprador");
    compradores.push(comprador);
}

console.log(compradores)
console.table(productos)

