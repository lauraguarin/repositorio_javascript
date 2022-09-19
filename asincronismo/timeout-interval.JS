function externa() {
    console.log('funcion externa al settimeout')
}
const functionext =()=>{
    console.log('funcion externa al settimeoutmodo flecha ') 
}

setTimeout(() => {
 console.log ('yo tengo sueño');
},2000);

setTimeout (function(){
    console.log ('funcion clasica ')
},3000)
setTimeout(externa,5000);
setTimeout(functionext,6000);
setInterval(() => {
    console.log('se repite esto')
},3000);
let timerId = setInterval(()=> console.log('amo mimir'),2000);

/*despues de 5 segundos */
setTimeout(() => {
    clearInterval(timerId);
    /*esto lo para */
},7000);
//escriba un programa que muestre un contador de uno hasta 10 doende cada numero se muestre cada 2 segundos
/*
setTimeout(() => {
    console.log (' me mostrara los numeros transcurridos dos segundos de la siguiente forma')
   },1000);
setTimeout(() => {
    console.log (1);
   },2000);
   setTimeout(() => {
    console.log (2);
   },2000);
   setTimeout(() => {
    console.log (3);
   },2000);
   setTimeout(() => {
    console.log (4);
   },2000);
   setTimeout(() => {
    console.log (5);
   },2000);
   setTimeout(() => {
    console.log (6);
   },2000);
   setTimeout(() => {
    console.log (7);
   },2000);
   setTimeout(() => {
    console.log (8);
   },2000);
   setTimeout(() => {
    console.log (9);
   },2000);
   setTimeout(() => {
    console.log (10);
   },2000);*/
   /*EJERICIO DEL PROFESOR*/
   for (let i = 0; i < 11; i++) {
   setTimeout(() => {
    console.log(i)
   },( i * 2000));
}