/* Genere una medida de temperatura en grados celcius de forma aleatoria
 y conviertala a Fahrenheit, Kelvin y Rankine.*/
 /*MEDIDA DE TEMPERATURA */
let inicio1 = 1;
let final1 = 100;
let temc = inicio1 + Math.floor (Math.random() * final1);
console.log(temc);
function temperaturafahr(temc)
{  let resultado= 1.8* temc +32;
    return resultado;

}
function temperaturakelvin(temc)
 {let resultado1 =temc+273.15;
    return resultado1;
}
function temperaturarankine(temc) {
    let resultado2=1.8*temc +491.67;
    return resultado2;
}
let resultado=temperaturafahr(temc);
console.log(`${temc}ºc =${resultado} ºFahrenheit`);
let resultado1=temperaturakelvin(temc);
console.log(`${temc}ºc =${resultado1} ºKelvin`);
let resultado2=temperaturarankine(temc);
console.log(`${temc}ºc =${resultado2} ºRankine`);

/*Resolver la formula cuadratica generando a, b y c aleatoriamente.
 Defina ud un límite para las variables, por ejemplo de 0 a 100*/
 /*FORMA CUADRATICA*/
 /*FORMA CUADRATICA*/
 let a = Math.floor(Math.random() * (100 + 100) - 100);
 let b = Math.floor(Math.random() * (100 + 100) - 100);
 let c = Math.floor(Math.random() * (100 + 100) - 100);
 console.log(a)
 console.log(b)
 console.log(c)

 function x1(a, b, c) {
    return (((-1) * b) + (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);

}
let resultado_x1 = x1(a, b, c);
console.log("x1 = " + resultado_x1);

function x2(A, b, c) {  
      return (((-1) * b) - (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);}
let resultado_x2 = x2(a, b, c);console.log("x2 = " +  resultado_x2);


