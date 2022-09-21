//Ejercicio 1
let vector=[];
function llenaArreglo(){{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(vector);
        let tamaño =Math.round( Math.random()*100)
    for (let i = 0; i < tamaño; i++) {
        vector[i]=Math.round(Math.random()*100)}
        console.log (vector)
    }, 1000)
    //reject (new Error('muestra el error de tenerlo'))
})
}} 
async function sumararreglo(){
        let suma = 0
        const suma1= await llenaArreglo()
        for (let i = 0; i < suma1.length; i++) {
            suma+=suma1[i] }
        console.log('la suma es ',suma)
        console.log (suma1)
    }sumararreglo()
   async function  promedioarrgelo(){
        suma=0;
        const promedio2= await sumararreglo()
        for (let i = 0; i < vector.length; i++) {
         suma+=vector[i];}
        let promedio1 = suma/vector.length
        console.log ('el valor del promedio es :',promedio1)
console.log (promedio2)
}
promedioarrgelo()
////////////////////////////////////////////////////////////////////////////////
//ejercicio 2
//function todas(cb1,cb2,cadena){
function todas(cadena){
  return new Promise((resolve,reject)=>{
    if (true){
    resolve(cadena)}
    else {
        reject (new Error('muestra el error de tenerlo'))
    }
   // cb1(cadena)
    //cb2(cadena)
    setTimeout(() => {
        resolve('El texto en MAYUSCULAS es:'+ cadena.toUpperCase());
        }, 2000);
    console.log('El texto original es:'+cadena)
    //console.log('El texto en MAYUSCULAS es:'+ cadena.toUpperCase())
    console.log('El texto en minuscula es:'+cadena.toLowerCase())


  })
}
todas('LaUra') 
async function contarMayusculas(cadena) {
    var cadena1 = await todas()
    console.log (cadena1)
    var contar = 0;
    var mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if (cadena[x] == mayusculas[i]) {
                contar += 1;
            }
        }
    }
    console.log(`El numero de mayusculas: ${contar}`)
    contarminusculas(cadena)
}
//al activarlo me muestra el comentario que puse y si lo 
//elimino me sale un problema con el .lenght en cadena

async function contarMayusculas(cadena) {
    var contar = 0;
    var minusculas = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < minusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if (cadena[x] == minusculas[i]) {
                contar += 1;
            }
        }
    }
    console.log(`El numero de minusculas: ${contar}`)
}

