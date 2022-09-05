function saludar(params){
    console.log ('Q onda')
}
saludar()

function saludar (nombre){
    console.log(`hola ${nombre}`)
}
saludar('Sena Soacha')

function saludar (nombre){
    return `hola ${nombre}`
}
//Trabajo para mañana
/* Funciones Cuadraticas
funciones para temperaturas son tres funciones y finciones cuadraticas.*/
//1.plantear la funcion
//2.planteamientoanalizar cual sale y tener un desarollo logico de la funcion.
//palabra reservada 
function primo(num)/*es una lista de parametros*/ {
var cont=o
for (let i = 1; i < num; i++) {
num%i==0?cont++:cont=cont;
}
if (cont>2) {
console.log('par')
}else{
    console.log('impar')
}
}
console.log (primo(101));
var x =11
x%2==0? console.log('es par'):console.log('es impar')
//return concat>2?'no primo':'primo'

/*el operador ternario es condicion ? valor si verdadero=valor si falso*/
//escriba una funcion que lea una cadena de texto y diga cuantas vocales y
//cuantas consonantes y cuantas que no son ni uno ni 2
console.log( "a,e,i,o,u".toUpperCase() ); 
console.log( "a,e,i,o,u".toLowerCase() ); 

const contarVocales = palabra => {
    // https://parzibyte.me/blog
    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
};


const cadena = "holiiiii";
const vocales = contarVocales(cadena);
console.log("La cadena '%s' tiene %d vocales", cadena, vocales);

const palabra="agosto";
const vowels=['a','e','i','o','u','A','E','I','O','U']
function cuantasLetras(cadena) {
    var cont=0;
    cadena.forEach(element => {
        if (element.in(vowels)) {
           cont++; 
        }
    });
    return cont;
}
 console.log(cuantasLetras('agosto'));
