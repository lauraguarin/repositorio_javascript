/*class producto {

}
var producto1=new producto();
var producto2=new producto();
var producto3=new producto();
console.log(typeof(producto1))*/
//OBJETOS LITERALES
//CONST,VAR,LET
/*const x=[];
var a={}
console.log(typeof(a));*/

var persona={
    //string
    nombre:'pedro perez',
    //number
    id:12222,
    //funcion clasica o flech
    //para que sepa cual es referente a como se hace 
   datoscompletos:()=> console.log(`${persona.nombre} ${persona.id}`),
}
console.log(persona)
console.log(persona.nombre)
persona.datoscompletos();
persona.direccion='calle 45'
persona.mascota='gato y perro'
console.log(persona)
persona.nombre='laura guarin'
delete persona.id;
persona.id='1023367585'
console.log(persona)
//o para uno solo dentro de parentesis se pone el punto y llamando la clave y en el otro ['']<=clave en comillas
//agrega una nueva pareja clave valor
/*4 objetos literales figuras gemetricas area y perimetro */




var triangulo={
a:4,
b:4,
c:2,
base:10,
altura:42,
perimetro:function() {
perimetro=triangulo.a+triangulo.b+triangulo.c
return perimetro
},
areat:function(){
    areat=((triangulo.base*triangulo.altura)/2)
     return areat
}
}
console.log(`el valor del perimetro es ${triangulo.perimetro()}`)
console.log(` el area del triangulo es ${triangulo.areat()}`)

var cuadrado={
l1:12,
numlados:4,
areacu:function () {
areacu=cuadrado.l1*cuadrado.l1
return areacu
},
perimetrocua:function () {
perimetrocua=cuadrado.numlados*cuadrado.l1
return perimetrocua
}
}
console.log(`el area es ${cuadrado.areacu()}`)
console.log(`el perimetro del cuadrado es${cuadrado.perimetrocua()}`)

var pentagono ={
numladospenta:5,
lado:5,
apotema:3.4,
perimetropent:function () {
    perimetropent=pentagono.numladospenta*pentagono.lado
    return perimetropent
},
areapent:function() {
areapent=((pentagono.perimetropent()*pentagono.apotema)/2)
return areapent
}
}
console.log(`el perimetro del pentagono es${pentagono.perimetropent()}`)
console.log(`el area es ${pentagono.areapent()}`)
//funcion que reciba como
//parametro un objeto y esa debe decir si es circunferenca o no
var circulo={
    radio:6,
    numeropi:3.1416,
    area: function (){
    return circulo.numeropi*Math.pow(circulo.radio,2)
    }
    }
    console.log(`el area del circulo es ${circulo.area()}`)
/*function circunferencia(objeto) {
    if(objeto.radio < 0){
        console.log('no es un circulo, no tiene circunferencia')
    }else{
        let circunferencia = objeto.radio * 3.1416 ** 2
        console.log(`la circunferencia es ${circunferencia}`)
    }

}
circunferencia(circulo)*/
function circunferencia(objeto) {
    if (objeto.hasOwnProperty('radio')) {
        console.log(`la circunferencia es: ${objeto.radio*3.1416*2}`)
    } else {
        console.log(`el objeto no puede generar una circunferencia`)
    }

}
//LA TAREA DE VOCALES
function letras(palabra){
    //palabra.toLowerCase()
    letricas=[0,0,0]
    vocales =['a','e','i','o','u']
    consonantes=['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    for (let e = 0; e < palabra.length; e++) {
        for (let v = 0; v < vocales.length; v++) {
            if(palabra[e]==vocales[v]){
                letricas[0]++
            }
        }
        for (let c = 0; c < consonantes.length; c++) {
            if(palabra[e]==consonantes[c]){
                letricas[1]++
            }

        }

    }
    letricas[2]=((palabra.length)-(letricas[0]+letricas[1]))
    return letricas
}
console.log(letras('holi como estas el dia de hoy'))



