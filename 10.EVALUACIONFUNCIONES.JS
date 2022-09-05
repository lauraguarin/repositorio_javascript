let array=[];
let tamaño=Math.round((Math.random()*25-5)+5);
console.log('valor de la variable tam',tamaño)
function arreglo(array,tamaño) {
     for (let i =0; i < tamaño; i++){
        array[i]=Math.round(Math.random()*100);
    } console.log(array) }
    arreglo(array,tamaño)
    //media 
    let media=0
    //se necesita el tamaño y el arreglo con los valores que estan arriba ,para que nos lo muestre
    function mediador(array,tamaño,media){
        let sum=0;  
    for (let i =0; i < array.length; i ++){
        sum+=array[i]
    } console.log('la suma de los elementos',sum)
    media =sum/tamaño
    //se divide por la cantidad de elementos que hay  con esto sacamos la media
    console.log('la media es ',media)}
    mediador(array,tamaño,media)

    //diferencias
    let dife=[];
    function diferencias(dife,array,tamaño,media){
    let sobrante=0;
    let faltante=0;
    for (let i =0; i < tamaño; i++){
        /*muestra los elementos del arreglo individualmente,recorre*/
        /*console.log(array[i])*/
        if (media > array[i]) {
            /*la media es 55 y elemento 1 es menor(10)entonces se realiza una resta da 45(faltante)se
             pone que se mayor para que no muestre el elemento en negativo,cuando es sobrante es porque
            el elemento es mayor a la media por ejemplo 88 y 55 es la media y el resultado 
             de eso es el faltante*/
       sobrante = media - array[i]
       dife [i]= sobrante
        } else {
           faltante = array[i] - media
           dife [i]= faltante
     }
    } 
    console.log ("el vector es ["+dife+"] el sobrante es"+ sobrante  +"el faltante es"+ faltante)
} 
 diferencias(dife,array,tamaño,media)
 