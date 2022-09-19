//BUSQUEDA DE EJEMPLOS TAREA 
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  f1();
  async function f2() {
    var l= await 20;
    console.log(l); // 20
  }
  f2();
  async function f3() {
    try {
      var z = await Promise.reject(30);
    } catch(e) {
      console.log(e); // 30
    }
  }
  f3();
  //SEGUNDA BUSQUEDA
  ///////////////////////////////////////////////////////
  function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
  }
  
  add1(10).then(v => {
    console.log(v);  // prints 60 after 4 seconds.
  });
  
  
  async function add2(x) {
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(30);
    return x + await p_a + await p_b;
  }
  
  add2(11).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
  });
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
 //EJERCICIO PRACTICO DEL LIBRO 
  function saySomething(x) {
    return new Promise(function (resolve,reject) {
    setTimeout(() => {
      resolve("something" + x);
      }, 2000);
      
    });
   }
   async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
   }
   talk(2);
   talk(4);
   talk(8);
//EJERCICIO DEL PROFESOR 
   function sumaArreglo(vector){  
    let s=0;      
        for (let i = 0; i < vector.length; i++) {
            s+=vector[i];                    
        }
        console.log(s);
        //return s;
    }



function promisoria(vec){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if(vec instanceof Array){                                        
                resolve(sumaArreglo(vec))                
            }
            else reject(new Error('!Debe ser arreglo'))    
        }, 2000);
        
})
}

async function prueba(vector){
try{
    const suma= await promisoria(vector);
   // console.log('Ir adelantando trabajo mientras se cumple la promesa')
    
    //console.log(suma)
}catch(Error){
    console.log('Fallo')
}
//console.log(suma);
}


let vectorReal=[1,2,3];
prueba(vectorReal);
/*Este ejercicio demostrará cómo usar await para esperar una promesa dentro de un asíncrono
función. Usando await y async, cree un contador con timeout() e incremente un
contravalor global.
1. Cree un valor global para un contador.
2. Cree una función que tome un argumento. Devolver el resultado de una nueva
Promesa, establecer una función setTimeout() que contendrá la resolución
instancia.
3. Incremente el contador dentro de setTimeout(), agregando uno cada segundo.
Resolver la Promesa con el valor de un contador y el valor de la
variable que estaba en el argumento de la función.
4. Cree una función asíncrona que envíe a la consola el valor de
el contador global y el valor del argumento de la función.
5. Cree una variable para capturar el valor de resolución devuelto de la espera
función. Envíe ese resultado a la consola.
6. Cree un ciclo para iterar 10 veces, incrementando el valor e invocando el
función asíncrona, pasando el valor de la variable de incremento como parámetro
en la función.
Los resultados deben ser similares a los siguientes*/
//EJERCICIO EN CONJUNTO CON MI COMPAÑERO BEOS
contador = 0
function respuesta(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            contador = contador+ 1
            resolve(contador+','+ a);
        }, 1000)
    })
}
async function pregunta(p){
    console.log(`variable = ${p} contador: ${contador}`);
    const respuestas = await respuesta(p)
    console.log(respuestas);}

for (let i = 0; i < 10; i++){
    pregunta(i)}
