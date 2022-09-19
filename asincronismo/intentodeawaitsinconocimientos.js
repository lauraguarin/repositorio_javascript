//Ejercicio 1 
let vector=[];
function llenaArreglo(){{
    return new Promise((resolve,reject)=>{
        resolve()
        reject (new Error('muestra el error de tenerlo'))
        let tamaño =Math.round( Math.random()*100)
    for (let i = 0; i < tamaño; i++) {
        vector[i]=Math.round(Math.random()*100)}
        console.log(vector)
        })
    
}}
llenaArreglo()
.then(sumararreglo)
.then(promedioarrgelo)
.catch(error=>console.log('se activa un error de haberlo'))
let suma = 0
function sumararreglo(){
    console.log('En la suma del .then')
        for (let i = 0; i < vector.length; i++) {
            suma+=vector[i] }
        console.log('la suma es ',suma)
    }
    function  promedioarrgelo(){
    console.log('En el promedio del .then')
        suma=0;
        for (let i = 0; i < vector.length; i++) {
         suma+=vector[i];
                
        }
        let promedio1 = suma/vector.length
        console.log ('el valos del promedio es :',promedio1)

}
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

