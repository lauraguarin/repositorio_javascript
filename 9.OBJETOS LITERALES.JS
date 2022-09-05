//https://cosasdigitales.com/articulos-diseno-web/objetos-literales-javascript-guia-practica-poo//
/*var factura = {
    numero: 201,
    cliente: 'Transportes Chemita',
    divisa: 'eur',
    subtotal: 350.25,
    IVA: 75.55,
    total: function(){
    return this.subtotal + this.IVA;
    }
}

var numeroFactura = factura.numero;
var totalFactura = factura.total();
// los métodos, por su capacidad de recibir parámetros, requieren paréntensis en su ejecución

console.log('La factura ' + numeroFactura + ' tiene un importe de ' + totalFactura);

// La factura 201 tiene un importe de 425.8 eur*/
//esto añade los datos dentro del sistema
var persona = {
    nombre: "Germán",
    apellido: "Escobar",
    edad: 35,
    estatura: 1.8
  }
  //nos permite hacer la busqueda de los datos
console.log(persona.nombre); // imprime Germán
console.log(persona.apellido); // imprime Escobar
console.log(persona.edad); // imprime 35
console.log(persona.estatura); // imprime 1.8
//obtener el valor de una llave
persona["Germán"]
// los valores de forma dinámica.
var llave = "nombre";
console.log(persona[llave]);
//https://makeitrealcamp.gitbook.io/javascript-book/objetos-literales//
