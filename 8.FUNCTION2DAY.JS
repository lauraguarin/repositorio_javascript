/*FUNCIONES SEGUNDO DIA */
//NUMEROS PERFECTOS
function perfecto(num){
var suma=0;
for (let i = 1; i < num; i++) {
if (num%i==0) {
    suma=suma+i;}
}
if (suma==num) {
return `${num} es perfecto`;
}
else {
    return `${num}  no es perfecto`;
}
}
console.log (perfecto(25));
//TRIANGULO Y SUS LADOS 
function tringulo(a,b,c) {
    if (a!=b && b!=c) {
       return(`escaleno`)
    }else if (a==b && b==c){
        return(`equilatero`) }
    else{return(`isosceles`)}
}

console.log(tringulo(8,8,2))
//TEOREMA DE PITAGORAS
 function teoremapitagoras(c1,c2 ){
  return Math.sqrt(Math.pow(c1,2)+Math.pow(c2,2))
 }
 console.log (teoremapitagoras(6,10))
 //FUNCIONES TIPO FLECHA 
const x=100;
const saludar=()=>{
    return`hola tatis`
}
console.log(saludar());
/* manera simplificada sin parametros */
const saludar2=()=> `hola camilo y ximena`;
console.log (saludar2())
/*funcion flecha con un parametro */
const saludar3=(nombre)=> `hola ${nombre} eres un pony salvaje `;
console.log(saludar3('petrico'))

const mifuncion=(c1,c2 )=>Math.sqrt(Math.pow(c1,2)+Math.pow(c2,2))
console.log(mifuncion(7,9))

var num = Math.round(Math.random() * 100);
const sumaejercicio = (num)=> {
var suma = 0;
var x = 2
var contador = 0;
  while (num > suma) {
    contador += 1
    suma += contador;
    //console.log(suma, '+', x)
    //x += 1;
    //return `${contador}`
}
return contador
}
console.log(ciclos7(20))


 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //CICLOS
/*ejercicio 2 de ciclos*/
function primo(num) {
    var cprimos = 0
     for (let i = 0; i < num; i++) {
     if (num % i == 0) {
    var cprimos = cprimos + 1
     }
     }
   if (cprimos > 2) {
    return (`${num} No es primo`)
   } else {
    return (`${num} Es primo`)
    
    }
    
    }
    console.log(primo(15))
    // en funcion flecha

    const primo = (num) => {
       var cprimos = 0
         for (let i = 0; i < num; i++) {
       if (num % i == 0) {
         var cprimos = cprimos + 1
         }
        }
       if (cprimos > 2) {
     return `${num} No es primo`
        } else {
         return `${num} Es primo`
        
         }
        }
        console.log(primo(15))
/*ejercicio 7 de ciclos*/

var num = Math.round(Math.random() * 100);
function ciclos7(num) {
var suma = 0;
var x = 2
var contador = 0;
  while (num > suma) {
    contador += 1
    suma += contador;
    //console.log(suma, '+', x)
    //x += 1;
    //return `${contador}`
}
return contador
}
console.log(ciclos7(20))
// en funcion flecha
var num = Math.round(Math.random() * 100);
const  ciclos=(num)=> {
var suma = 0;
var x = 2
var contador = 0;
  while (num > suma) {
    contador += 1
    suma += contador;
    //console.log(suma, '+', x)
    //x += 1;
    //return `${contador}`
}
return contador
}
console.log(ciclos(20))
/*ejercicio 9 ciclos*/
function potencia(num, p) {
    var total = 1
     for (let i = 0; i < p; i++) {
     total = total * num
    
     }
     return (`El resultado es ${total}`)
    
    }
    console.log(potencia(12, 3))
    //en funcion flecha

    const potencia = (num, p) => {
        var total = 1
        for (let i = 0; i < p; i++) {
       total = total * num
        
        }
      return `El resultado es ${total}`
        
        }
        console.log(potencia(12, 3))
/* ejercicio 11 ciclos*/

function ejercicio11(n1,n2) {

var dividendo;
var divisor;
var multiplo = divisor;
var cociente = 0
var residuo
if (n1 > n2) {
    dividendo = n1
    divisor = n2
} else {
    dividendo = n2;
    divisor = n1;
}

for (multiplo; multiplo < dividendo; multiplo = multiplo + divisor) {
    cociente += 1
}

residuo = dividendo - (cociente * divisor);
return `${dividendo}, ' / ', ${divisor}, '\ncociente: ', ${cociente}, '\nresiduo:', ${residuo}`}
console.log(ejercicio11(63,27))
//en funcion flecha
const ddmcr=(n1,n2) =>{

    var dividendo;
    var divisor;
    var multiplo = divisor;
    var cociente = 0
    var residuo
    if (n1 > n2) {
        dividendo = n1
        divisor = n2
    } else {
        dividendo = n2;
        divisor = n1;
    }
    
    for (multiplo; multiplo < dividendo; multiplo = multiplo + divisor) {
        cociente += 1
    }
    
    residuo = dividendo - (cociente * divisor);
    return `${dividendo}, ' / ', ${divisor}, '\ncociente: ', ${cociente}, '\nresiduo:', ${residuo}`}
    console.log(ddmcr(63,27))
/*ejercicio 12 de ciclos */
function piramide(n) {
    

var n = 100
for (let i =0; i <= n ; i ++){
    let resultado ='';

    for(let j =1; j <=i; ++j){
        resultado +='*';
    }
    console.log(resultado);
}}

console.log (piramide(100))
//en funcion flecha
const piramide2=(n)=>{
    
    var n = 100
    for (let i =0; i <= n ; i ++){
        let resultado ='';
    
        for(let j =1; j <=i; ++j){
            resultado +='*';
        }
        console.log(resultado);
    }
}
    
    console.log (piramide2(100))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CONDICIONALES
/*ejercicio 1 condicionales*/
function medio(num1, num2, num3) {
    if ((num2 > num1) == (num2 < num3)) {
   return (`El numero del medio es ${num2}`)
    } else if ((num1 > num2) == (num1 < num3)) {
   return (`El numero del medio es ${num1}`)
     } else {
   return (`El numero del medio es ${num3}`)
    }
    }
    console.log(medio(55, 10, 25))
    //en funcion flecha
    const medio2 = (num1, num2, num3) => {
        if ((num2 > num1) == (num2 < num3)) {
        return `El numero del medio es ${num2}`
         } else
       if ((num1 > num2) == (num1 < num3)) {
      return `El numero del medio es ${num1}`
       } else {
         return `El numero del medio es ${num3}`
        }
        }
        console.log(medio2(55, 10, 25))
/*ejercicio 2 condicionales*/
var valor1 = Math.round(Math.random()*5)
console.log(valor1)
var valor2 = Math.round(Math.random()*5)
console.log(valor2)
var valor3 = Math.round(Math.random()*10)
console.log(valor3) 
function valoresiguales(valor1,valor2,valor3) {
    
if (valor1==valor2 && valor1 == valor3) {
  return('los tres valores son iguales')
} else if (valor1 !=valor2 && valor1 == valor3) {
    return('dos valores son iguales')
} else if (valor1 !=valor2 && valor1 !=valor3) {
    return('los tres valores son distintos')
} 
 else if (valor2 == valor1 && valor2 != valor3) {
    return('hay dos valores son iguales')
}else if (valor3 == valor2 && valor3 != valor1) {
    return('hay dos valores iguales')
}
}
console.log(valoresiguales(5,2,9))
//en funcion flecha
const valoresiguales2=(valor1,valor2,valor3)=> {
    
    if (valor1==valor2 && valor1 == valor3) {
      return('los tres valores son iguales')
    } else if (valor1 !=valor2 && valor1 == valor3) {
        return('dos valores son iguales')
    } else if (valor1 !=valor2 && valor1 !=valor3) {
        return('los tres valores son distintos')
    } 
     else if (valor2 == valor1 && valor2 != valor3) {
        return('hay dos valores son iguales')
    }else if (valor3 == valor2 && valor3 != valor1) {
        return('hay dos valores iguales')
    }
    }
    console.log(valoresiguales2(5,2,9))
/*ejercicio 3 condicionales*/

function ejercicio3(num) {

if (num < 10 ) {
  return`Tiene una cifra :${num}`
} else if (num < 100) {
    return`Tiene  dos cifras :${num}`
} else if (num < 1000) {
    return`Tiene  tres cifras :${num}`
} else if (num < 10000) {
    return`Tiene cuatro cifras :${num}`
} else {
  return`Esta excediendo el limite `
}}

console.log(ejercicio3(1000))
//en funcion flecha
const solicitudnum = (num)=> {

    if (num < 10 ) {
      return`Tiene una cifra :${num}`
    } else if (num < 100) {
        return`Tiene  dos cifras :${num}`
    } else if (num < 1000) {
        return`Tiene  tres cifras :${num}`
    } else if (num < 10000) {
        return`Tiene cuatro cifras :${num}`
    } else {
      return`Esta excediendo el limite `
    }}
    
    console.log(solicitudnum(1000))
/*ejercicio 4 de condicionales */
function promedionotas(nota) {
     if (nota < 2) {
    return ('La nota ingresada es Deficiente')
     } else if (nota < 4) {
    return ('La nota ingresada es Insuficiente')
    } else if (nota < 6) {
     return ('La nota ingresada es Aceptable')
   } else if (nota < 8) {
     return ('La nota ingresada es Buena')
     } else if (nota <= 10) {
    return ('La nota ingresada es Excelente')
    } else {
    return ('La nota es incorrecta') }
    
    }
    console.log(promedionotas(4))
    //en funcion flecha
    const promedionotas2 = (nota) => {
         if (nota < 2) {
       return 'La nota ingresada es Deficiente'
         } else
        if (nota < 4) {
         return 'La nota ingresada es Insuficiente'
         } else if (nota < 6) {
        return 'La nota ingresada es Aceptable'
         } else if (nota < 8) {
        return 'La nota ingresada es Buena'
         } else if (nota <= 10) {
         return 'La nota ingresada es Excelente'
        } else {
         return 'La nota es incorrecta'
         }
        }
        
        console.log(promedionotas2(4))
/*ejercicio 5 condicionales*/
var respuesta1= Math.floor(Math.random()*2);
var respuesta2= Math.floor(Math.random()*2);
var respuesta3= Math.floor(Math.random()*2);
function condicionales5(respuesta1,respuesta2,respuesta3) {
    var pregunta1 = '¿colon descubrio america?';
    var pregunta2 = '¿la independecia de colombia fue en el año 1810?';
    var pregunta3 = '¿the doors fue un grupo de rock americano?';
    console.log(pregunta1)
    if (respuesta1 == 1){
        console.log ('respuesta : si')
        console.log(pregunta2);
        if (respuesta2 == 1) {
          console.log ('respuesta : si')
        console.log(pregunta3)
        if (respuesta3==2){
          console.log ('respuesta : no')
        console.log('ganaste')
        }else {
          console.log ('respuesta : si')
          console.log('a salido del juego')
      }
       } else {
          console.log ('respuesta : no')
          console.log('a salido del juego')
       }
       } else {
          console.log ('respuesta : no')
          console.log('a salido del juego')}}

condicionales5(respuesta1,respuesta2,respuesta3)
//en funcion flecha
var respuesta1= Math.floor(Math.random()*2);
var respuesta2= Math.floor(Math.random()*2);
var respuesta3= Math.floor(Math.random()*2);
const condicionales=(respuesta1,respuesta2,respuesta3)=> {
    var pregunta1 = '¿colon descubrio america?';
    var pregunta2 = '¿la independecia de colombia fue en el año 1810?';
    var pregunta3 = '¿the doors fue un grupo de rock americano?';
    console.log(pregunta1)
    if (respuesta1 == 1){
        console.log ('respuesta : si')
        console.log(pregunta2);
        if (respuesta2 == 1) {
          console.log ('respuesta : si')
        console.log(pregunta3)
        if (respuesta3==2){
          console.log ('respuesta : no')
        console.log('ganaste')
        }else {
          console.log ('respuesta : si')
          console.log('a salido del juego')
      }
       } else {
          console.log ('respuesta : no')
          console.log('a salido del juego')
       }
       } else {
          console.log ('respuesta : no')
          console.log('a salido del juego')}}

condicionales(respuesta1,respuesta2,respuesta3)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//LA MODA
function moda(vec,tam,numr,maxr,moda) {
    var vec=[],
 tam=Math.round((Math.random()*50-10)+10),
 a,
 maxr=0,
 moda
 console.log (`valor de la variable ${tam}`);

for(var i =0; i<tam; i++){
    vec[i]=Math.round(Math.random()*50)}
    console.log(vec)
    for (var j = 0; j< vec.length; j++){
        var numr=0
    for(var l =j+1;l<vec.length; l++){
        if(vec[j] == vec[l]){
            numr = numr + 1
        };
        if (numr>maxr){
            moda = vec[j]
            maxr = numr

        }
    }
    }
    console.log('la moda es '+moda)}
    console.log(moda(50))
//FLECHA
const moda1=(vec,tam,numr,maxr,moda) =>{
    var vec=[],
 tam=Math.round((Math.random()*50-10)+10),
 a,
 maxr=0,
 moda
 console.log (`valor de la variable ${tam}`);

for(var i =0; i<tam; i++){
    vec[i]=Math.round(Math.random()*50)}
    console.log(vec)
    for (var j = 0; j< vec.length; j++){
        var numr=0
    for(var l =j+1;l<vec.length; l++){
        if(vec[j] == vec[l]){
            numr = numr + 1
        };
        if (numr>maxr){
            moda = vec[j]
            maxr = numr

        }
    }
    }
    console.log('la moda es '+moda)}
    console.log(moda1(50))
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DESVIACION ESTANDAR
function desviacion(vec) {
    var vec=[],
t=Math.round((Math.random()*50-10)+10),
p=0
pf=0
d=0
sd=0
dt=0
console.log (`valor de la variable ${t}`);
for(var i =0; i<t; i++){
    vec[i]=Math.round(Math.random()*50)
     p=p +vec[i]
    }

pf=Math.trunc(p/vec.length)
console.log(vec)
for (var i =0; i< vec.length;i++){
    d=Math.pow((vec[i]-pf),5)
    sd=sd+d
}
dt=sd/vec.length
console.log(`la desviacion estandar es ${dt}`)}
console.log(desviacion(50))
//FLECHA
const desviacion1=(vec)=> {
    var vec=[],
t=Math.round((Math.random()*50-10)+10),
p=0
pf=0
d=0
sd=0
dt=0
console.log (`valor de la variable ${t}`);
for(var i =0; i<t; i++){
    vec[i]=Math.round(Math.random()*50)
     p=p +vec[i]
    }

pf=Math.trunc(p/vec.length)
console.log(vec)
for (var i =0; i< vec.length;i++){
    d=Math.pow((vec[i]-pf),5)
    sd=sd+d
}
dt=sd/vec.length
console.log(`la desviacion estandar es ${dt}`)}
console.log(desviacion1(50))

 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LA MEDIANA
function mediana(vec) { 
    var vec=[], 
    t=Math.round((Math.random()*20-10)+10),
    a
console.log(`Valor variable tam= ${t}`);
for(let i=0; i<t; i++){
  vec[i]=Math.round(Math.random()*100)
}
console.log(vec)
for (var i = 0; i < vec.length; i++) {
  for (let j = i + 1; j < vec.length; j++) {
    if (vec[i] > vec[j]) (
    a =  vec[i],
    vec[i] = vec[j],
    vec[j] = a
    )
  }
}
console.log(vec)

if (vec.length%2==0) {
    var Mediana=Math.round((vec.length)/2)
    return("la mediana es "+vec[Mediana-1]+' y '+vec[Mediana]) 
} else {
    var Mediana=Math.round((vec.length+1)/2)
   return ("la mediana es "+vec[Mediana-1])
}} 
console.log(mediana(50))
//FLECHA
const mediana1=(vec)=> { 
    var vec=[], 
    t=Math.round((Math.random()*20-10)+10),
    a
console.log(`Valor variable tam= ${t}`);
for(let i=0; i<t; i++){
  vec[i]=Math.round(Math.random()*100)
}
console.log(vec)
for (var i = 0; i < vec.length; i++) {
  for (let j = i + 1; j < vec.length; j++) {
    if (vec[i] > vec[j]) (
    a =  vec[i],
    vec[i] = vec[j],
    vec[j] = a
    )
  }
}
console.log(vec)

if (vec.length%2==0) {
    var Mediana=Math.round((vec.length)/2)
    return("la mediana es "+vec[Mediana-1]+' y '+vec[Mediana]) 
} else {
    var Mediana=Math.round((vec.length+1)/2)
   return ("la mediana es "+vec[Mediana-1])
}} 
console.log(mediana1(50))
 