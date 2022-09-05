/*MISION:
 1.Escriba métodos para suma, promedio, mayor, menor. 
 2.Escriba una clase que represente un producto comercial de cualquier área. 
Debe tener constructor, setters, getters y un método para calcular el valor despues de IVA.
Leer de la 149 a la 161 del hermoso libro de JS*/
class Numeros{
    constructor(vector){
        this._vector=vector;
    }
    llenarVector(tamaño){
        for (let i = 0; i < tamaño; i++) {
           this._vector[i]=Math.round(Math.random()*100)

        }
    }

    get vector(){
        return this._vector;

}
    suma(){
    for (let i =0; i < vec.length; i++) {
        suma+=vec[i]
      }console.log('La suma de todos los numeros es',suma)
    promedio = suma/vec.length
    console.log('El promedio de todos los numeros es',promedio)}

mayor(){
    for (let i = 0; i < vec.length; i++) {
        if (vec[i] > mayor)
            mayor = vec[i]

    } console.log('el numero mayor es ', mayor)}
menor(){
    for (let i = 0; i < vec.length; i++) {
        if (menor > vec[i])
            menor = vec[i]
    } console.log('el numero menor es ', menor)}
}
let suma = 0
let promedio = 0
let mayor = 0
let menor = 100
let vec=[]
let tamaño= Math.round(Math.random()*100)
console.log('valor de variables tamaño', tamaño)
let ob=new Numeros(vec);
ob.llenarVector(tamaño);
console.log(ob.vector);
console.log(ob.suma())
console.log(ob.mayor())
console.log(ob.menor())


class produto{
    constructor(product,subtotal) {
    this._product=product;
    this._subtotal=subtotal;
    }

valor(product,subtotal,ivva){
     let total = subtotal+ivva
    return total
}
sinValor(product,subtotal,ivva){
    let totall=ivva-subtotal
    return totall
} get product(){
    return this._product;

}set product(product){
    return this._product=product;
}

}
let product='cebolla'
let subtotal=21849
let ivva=4151
let pr=new produto(product,subtotal)
console.log(pr)
console.log('valor del producto con iva')
console.log(pr.valor(product,subtotal,ivva))
console.log('el valor sin iva es de')
console.log(pr.sinValor(product,subtotal,ivva))

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Person {
    constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    }
   }
   let p = new Person("Maaike", "van Putten");
console.log("Hi", p.firstname);

class holito{
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
    }
   }
   let p1 = new Person("Maria", "Saga");
console.log(p1.firstname);
   constructor(firstname, lastname){
    if(firstname.startsWith("M")){
    this.#firstname = firstname;
    } else {
    this.#firstname = "M" + firstname;
    }
    this.#lastname = lastname;
    }
    let p2 = new holito("kay", "Moon");



